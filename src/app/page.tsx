import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center w-full h-full gap-10 py-24">
        <Card className="max-w-xl w-full flex flex-col items-center gap-6 p-10 text-center">
          <Badge label="Welcome" color="accent" pulsing />
          <h1 className="text-4xl font-display font-bold bg-linear-to-r from-(--accent) to-(--accent-secondary) text-transparent bg-clip-text">
            Welcome to ChurnGuard 2.0
          </h1>
          <p className="text-lg text-(--muted-foreground)">
            Your modern churn detection and intervention dashboard. Explore the dashboard to see live metrics, customer health, and more.
          </p>
          <Button asChild size="lg" variant="primary">
            <a href="/dashboard">Go to Dashboard</a>
          </Button>
        </Card>
      </div>
    </MainLayout>
  );
}
