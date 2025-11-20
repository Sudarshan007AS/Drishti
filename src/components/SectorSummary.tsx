import { SectorSummary as SectorSummaryType } from "@/types/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PortfolioTable } from "./PortfolioTable";
import { TrendingUp, TrendingDown, Briefcase } from "lucide-react";

interface SectorSummaryProps {
  summary: SectorSummaryType;
}

export const SectorSummary = ({ summary }: SectorSummaryProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
  };

  return (
    <Card className="relative overflow-hidden glass-card shadow-card hover:shadow-glow transition-all duration-300 border-l-4 border-l-primary">
      <div className="absolute top-0 right-0 h-32 w-32 gradient-primary opacity-5 blur-3xl" />
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2.5 rounded-xl gradient-primary shadow-glow">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold tracking-tight">{summary.sector}</span>
          </CardTitle>
          <div className="flex items-center gap-6 text-sm">
            <div className="text-right px-4 py-2 rounded-lg bg-muted/50">
              <div className="text-muted-foreground text-xs font-medium uppercase tracking-wide">Total Investment</div>
              <div className="font-mono font-bold text-foreground">{formatCurrency(summary.totalInvestment)}</div>
            </div>
            <div className="text-right px-4 py-2 rounded-lg bg-muted/50">
              <div className="text-muted-foreground text-xs font-medium uppercase tracking-wide">Present Value</div>
              <div className="font-mono font-bold text-foreground">{formatCurrency(summary.totalPresentValue)}</div>
            </div>
            <div className="text-right px-4 py-2 rounded-lg bg-muted/50">
              <div className="text-muted-foreground text-xs font-medium uppercase tracking-wide">Gain/Loss</div>
              <div
                className={`flex items-center gap-2 font-mono font-bold ${
                  summary.gainLoss >= 0 ? "text-success" : "text-danger"
                }`}
              >
                {summary.gainLoss >= 0 ? (
                  <TrendingUp className="h-5 w-5" />
                ) : (
                  <TrendingDown className="h-5 w-5" />
                )}
                <div>
                  {formatCurrency(Math.abs(summary.gainLoss))}
                  <span className="text-xs ml-1">({formatPercent(summary.gainLossPercent)})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <PortfolioTable stocks={summary.stocks} />
      </CardContent>
    </Card>
  );
};
