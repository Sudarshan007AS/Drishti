import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Wallet, DollarSign, PieChart } from "lucide-react";

interface PortfolioSummaryCardsProps {
  totalInvestment: number;
  totalPresentValue: number;
  totalGainLoss: number;
  totalGainLossPercent: number;
}

export const PortfolioSummaryCards = ({
  totalInvestment,
  totalPresentValue,
  totalGainLoss,
  totalGainLossPercent,
}: PortfolioSummaryCardsProps) => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="relative overflow-hidden glass-card shadow-card hover:shadow-glow transition-all duration-300 group">
        <div className="absolute inset-0 gradient-primary opacity-5 group-hover:opacity-10 transition-opacity" />
        <CardHeader className="pb-3">
          <CardTitle className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2 text-muted-foreground">
            <div className="p-2 rounded-lg bg-primary/10">
              <Wallet className="h-4 w-4 text-primary" />
            </div>
            Total Investment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold font-mono tracking-tight">{formatCurrency(totalInvestment)}</div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden glass-card shadow-card hover:shadow-glow transition-all duration-300 group">
        <div className="absolute inset-0 gradient-accent opacity-5 group-hover:opacity-10 transition-opacity" />
        <CardHeader className="pb-3">
          <CardTitle className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2 text-muted-foreground">
            <div className="p-2 rounded-lg bg-accent/10">
              <DollarSign className="h-4 w-4 text-accent" />
            </div>
            Present Value
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold font-mono tracking-tight">{formatCurrency(totalPresentValue)}</div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden glass-card shadow-card hover:shadow-glow transition-all duration-300 group">
        <div className={`absolute inset-0 ${totalGainLoss >= 0 ? "gradient-success" : "gradient-danger"} opacity-5 group-hover:opacity-10 transition-opacity`} />
        <CardHeader className="pb-3">
          <CardTitle className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2 text-muted-foreground">
            <div className={`p-2 rounded-lg ${totalGainLoss >= 0 ? "bg-success/10" : "bg-danger/10"}`}>
              {totalGainLoss >= 0 ? (
                <TrendingUp className={`h-4 w-4 text-success`} />
              ) : (
                <TrendingDown className={`h-4 w-4 text-danger`} />
              )}
            </div>
            Total Gain/Loss
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`text-3xl font-bold font-mono tracking-tight flex items-center gap-2 ${
              totalGainLoss >= 0 ? "text-success" : "text-danger"
            }`}
          >
            {totalGainLoss >= 0 ? (
              <TrendingUp className="h-7 w-7" />
            ) : (
              <TrendingDown className="h-7 w-7" />
            )}
            {formatCurrency(Math.abs(totalGainLoss))}
          </div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden glass-card shadow-card hover:shadow-glow transition-all duration-300 group">
        <div className={`absolute inset-0 ${totalGainLossPercent >= 0 ? "gradient-success" : "gradient-danger"} opacity-5 group-hover:opacity-10 transition-opacity`} />
        <CardHeader className="pb-3">
          <CardTitle className="text-xs font-semibold uppercase tracking-wider flex items-center gap-2 text-muted-foreground">
            <div className={`p-2 rounded-lg ${totalGainLossPercent >= 0 ? "bg-success/10" : "bg-danger/10"}`}>
              <PieChart className={`h-4 w-4 ${totalGainLossPercent >= 0 ? "text-success" : "text-danger"}`} />
            </div>
            Returns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`text-3xl font-bold font-mono tracking-tight ${
              totalGainLossPercent >= 0 ? "text-success" : "text-danger"
            }`}
          >
            {formatPercent(totalGainLossPercent)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
