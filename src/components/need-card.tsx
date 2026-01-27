"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, CheckCircle2 } from "lucide-react";

export interface NeedCardProps {
  id: string;
  title: string;
  description?: string;
  city: string;
  category: string;
  status: "open" | "completed";
  volunteerCount: number;
  onParticipate?: (id: string) => void;
  onMarkResolved?: (id: string) => void;
  showResolveButton?: boolean;
}

const categoryColors: Record<string, string> = {
  Cleaning: "bg-emerald-light/20 text-emerald border-emerald/30",
  Education: "bg-teal/20 text-teal-dark border-teal/30",
  Emergency: "bg-destructive/10 text-destructive border-destructive/30",
  Donation: "bg-terracotta/20 text-terracotta border-terracotta/30",
  Healthcare: "bg-primary/10 text-primary border-primary/30",
  Infrastructure: "bg-sand-dark/30 text-foreground border-sand-dark/50",
};

export function NeedCard({
  id,
  title,
  description,
  city,
  category,
  status,
  volunteerCount,
  onParticipate,
  onMarkResolved,
  showResolveButton = false,
}: NeedCardProps) {
  const categoryStyle = categoryColors[category] || "bg-muted text-muted-foreground border-border";

  return (
    <Card className="group flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className={`${categoryStyle} text-xs font-medium`}>
              {category}
            </Badge>
            <Badge
              variant={status === "completed" ? "secondary" : "default"}
              className={`text-xs ${
                status === "completed"
                  ? "bg-muted text-muted-foreground"
                  : "bg-primary/10 text-primary"
              }`}
            >
              {status === "completed" ? (
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Completed
                </span>
              ) : (
                "Open"
              )}
            </Badge>
          </div>
        </div>
        <h3 className="mt-2 line-clamp-2 font-serif text-lg font-semibold leading-tight text-foreground">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="flex-grow pb-3">
        {description && (
          <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{description}</p>
        )}
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{city}</span>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-3 border-t border-border/50 pt-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4 text-terracotta" />
            <span className="text-sm font-medium text-foreground">
              {volunteerCount > 0 ? (
                <>
                  <span className="text-terracotta">{volunteerCount}</span> citizens helping
                </>
              ) : (
                "Be the first to help!"
              )}
            </span>
          </div>
        </div>

        <div className="flex w-full gap-2">
          {status === "open" && (
            <Button
              className="flex-1"
              onClick={() => onParticipate?.(id)}
            >
              I participate
            </Button>
          )}
          {showResolveButton && status === "open" && (
            <Button
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => onMarkResolved?.(id)}
            >
              Mark Resolved
            </Button>
          )}
          {status === "completed" && (
            <div className="flex w-full items-center justify-center rounded-md bg-muted py-2 text-sm text-muted-foreground">
              This need has been fulfilled
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
