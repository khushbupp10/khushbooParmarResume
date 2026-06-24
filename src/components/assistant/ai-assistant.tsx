"use client";

import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { assistantPrompts, searchAssistant } from "@/data/assistant";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  text: string;
  link?: { href: string; label: string };
}

export function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! I'm Khushboo's site assistant. Ask about research, accessibility, projects, or try a quick prompt below.",
    },
  ]);

  const send = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;
    const result = searchAssistant(trimmed);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "assistant", text: result.response, link: result.link },
    ]);
    setInput("");
  };

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg",
          open && "bg-muted text-foreground"
        )}
        variant={open ? "outline" : "gradient"}
        size="icon"
        aria-expanded={open}
        aria-controls="ai-assistant-panel"
        aria-label={open ? "Close assistant" : "Open AI assistant"}
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </Button>

      {open && (
        <Card
          id="ai-assistant-panel"
          role="dialog"
          aria-label="AI Assistant"
          className="fixed bottom-24 right-6 z-50 w-[min(100vw-2rem,24rem)] glass shadow-2xl"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-base gradient-text">Lab Assistant</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div
              className="max-h-48 space-y-2 overflow-y-auto text-sm"
              aria-live="polite"
              aria-relevant="additions"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "rounded-lg px-3 py-2",
                    msg.role === "user"
                      ? "ml-6 bg-primary/20 text-foreground"
                      : "mr-6 bg-muted text-muted-foreground"
                  )}
                >
                  <p>{msg.text}</p>
                  {msg.link && (
                    <Link href={msg.link.href} className="mt-1 inline-block text-xs text-primary hover:underline">
                      {msg.link.label} →
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1">
              {assistantPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => send(prompt)}
                  className="rounded-full border border-border/60 px-2 py-0.5 text-[10px] text-muted-foreground hover:border-primary/40 hover:text-primary"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything..."
                aria-label="Ask the assistant"
                className="text-sm"
              />
              <Button type="submit" size="icon" variant="gradient" aria-label="Send message">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
}
