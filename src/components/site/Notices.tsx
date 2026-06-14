import { Bell, Info, TriangleAlert } from "lucide-react";

import { notices } from "./data";
import { cn } from "@/lib/utils";

export function Notices() {
  return (
    <section id="avisos" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal rounded-[2rem] border border-border bg-muted/50 p-6 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Bell className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-2xl text-foreground sm:text-3xl">Avisos</h2>
              <p className="text-sm text-muted-foreground">
                Informações importantes para as famílias da nossa escola.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {notices.map((notice) => {
              const isAlert = notice.level === "alert";
              return (
                <article
                  key={notice.title}
                  className={cn(
                    "rounded-2xl border bg-card p-5 shadow-soft",
                    isAlert ? "border-accent" : "border-border",
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-xl",
                        isAlert
                          ? "bg-yellow-soft text-accent-foreground"
                          : "bg-blue-soft text-primary",
                      )}
                    >
                      {isAlert ? (
                        <TriangleAlert className="h-4 w-4" />
                      ) : (
                        <Info className="h-4 w-4" />
                      )}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      {notice.date}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg text-foreground">
                    {notice.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {notice.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}