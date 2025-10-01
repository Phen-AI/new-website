import { randomUUID } from "crypto";
import { type User, type InsertUser, type ContactSubmission, type InsertContactSubmission, users, contactSubmissions } from "@shared/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
}

class InMemoryStorage implements IStorage {
  private users = new Map<string, User>();
  private submissions: ContactSubmission[] = [];

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    for (const user of this.users.values()) {
      if (user.username === username) {
        return user;
      }
    }
    return undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: randomUUID(),
      username: insertUser.username,
      password: insertUser.password,
    };

    this.users.set(user.id, user);
    return user;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const record: ContactSubmission = {
      id: randomUUID(),
      created_at: new Date(),
      ...submission,
    };

    this.submissions.push(record);
    return record;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return [...this.submissions];
  }
}

export class DbStorage implements IStorage {
  constructor(private readonly db: ReturnType<typeof drizzle>) {}

  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await this.db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return await this.db.select().from(contactSubmissions);
  }
}

let storageInstance: IStorage;

if (process.env.DATABASE_URL) {
  const sql = neon(process.env.DATABASE_URL);
  const db = drizzle(sql);
  storageInstance = new DbStorage(db);
} else {
  console.warn("DATABASE_URL environment variable is not set. Using in-memory storage; data will reset on restart.");
  storageInstance = new InMemoryStorage();
}

export const storage = storageInstance;
