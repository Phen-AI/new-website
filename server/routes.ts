import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import rateLimit from "express-rate-limit";

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 submissions per 15 minutes
  message: { error: "Too many submissions. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", contactLimiter, async (req, res) => {
    try {
      // Transform camelCase from frontend to snake_case for database
      const transformed = {
        name: req.body.name,
        email: req.body.email,
        company: req.body.company,
        project_type: req.body.projectType,
        budget_range: req.body.budgetRange,
        message: req.body.message,
      };
      
      const validated = insertContactSubmissionSchema.parse(transformed);
      const submission = await storage.createContactSubmission(validated);
      
      // TODO: Send email notification using Resend or SendGrid
      // Email integration requires API credentials (RESEND_API_KEY or SENDGRID_API_KEY)
      
      res.json({ success: true, id: submission.id });
    } catch (error: any) {
      if (error.name === "ZodError") {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({ error: "Failed to submit contact form" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
