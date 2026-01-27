"use client";

import { NeedCard, type NeedCardProps } from "@/components/need-card";

interface NeedsGridProps {
  needs: Omit<NeedCardProps, "onParticipate" | "onMarkResolved">[];
  onParticipate?: (id: string) => void;
  onMarkResolved?: (id: string) => void;
  showResolveButton?: boolean;
}

export function NeedsGrid({ needs, onParticipate, onMarkResolved, showResolveButton = false }: NeedsGridProps) {
  if (needs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 py-16 text-center">
        <div className="mb-4 rounded-full bg-muted p-4">
          <svg
            className="h-8 w-8 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>
        <h3 className="font-serif text-lg font-semibold text-foreground">No needs found</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Try adjusting your filters or check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {needs.map((need) => (
        <NeedCard
          key={need.id}
          {...need}
          onParticipate={onParticipate}
          onMarkResolved={onMarkResolved}
          showResolveButton={showResolveButton}
        />
      ))}
    </div>
  );
}
