import React from "react";
import MainLayout from "@/components/layout/MainLayout";

export default function DashboardPage() {
  return (
    <MainLayout>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {/* Metric Cards */}
        <div className="bento rounded-bento shadow-bento bg-card p-6 flex flex-col gap-2 border border-slate-200/60 relative overflow-hidden">
          <span className="text-xs font-medium text-slate-500">Active Customers</span>
          <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">1,245</span>
          <span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full w-max mt-1">+3.2% this week</span>
        </div>
        <div className="bento rounded-bento shadow-bento bg-card p-6 flex flex-col gap-2 border border-slate-200/60 relative overflow-hidden">
          <span className="text-xs font-medium text-slate-500">Churn Risk</span>
          <span className="text-3xl font-bold tracking-tight text-rose-600">8.1%</span>
          <span className="text-xs font-medium text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full w-max mt-1">-1.1% this week</span>
        </div>
        <div className="bento rounded-bento shadow-bento bg-card p-6 flex flex-col gap-2 border border-slate-200/60 relative overflow-hidden">
          <span className="text-xs font-medium text-slate-500">Interventions</span>
          <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">27</span>
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full w-max mt-1">+2 new</span>
        </div>
        <div className="bento rounded-bento shadow-bento bg-card p-6 flex flex-col gap-2 border border-slate-200/60 relative overflow-hidden">
          <span className="text-xs font-medium text-slate-500">Avg. Health Score</span>
          <span className="text-3xl font-bold tracking-tight text-indigo-600">82</span>
          <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full w-max mt-1">Stable</span>
        </div>
      </section>
      {/* Empty State Example */}
      <section className="mt-10 flex flex-col items-center justify-center h-64 bg-card rounded-xl shadow-card border border-slate-200/60">
        <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
          <span className="text-4xl text-slate-400">🕊️</span>
        </div>
        <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">No recent churn events</h2>
        <p className="text-slate-500 mb-4">Your customers are happy! When churn is detected, you'll see it here.</p>
        <button className="px-4 py-2 rounded-lg bg-primary text-white font-medium shadow-card hover:bg-indigo-700 transition">Simulate Churn Event</button>
      </section>
    </MainLayout>
  );
}
