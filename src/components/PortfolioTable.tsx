import { CalculatedStock } from "@/types/portfolio";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface PortfolioTableProps {
  stocks: CalculatedStock[];
}

export const PortfolioTable = ({ stocks }: PortfolioTableProps) => {
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
    <div className="rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden shadow-card">
      <Table>
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-muted/80 to-muted/50 border-b-2 border-primary/20">
            <TableHead className="font-bold text-xs uppercase tracking-wider">Particulars</TableHead>
            <TableHead className="text-right font-bold text-xs uppercase tracking-wider">Purchase Price</TableHead>
            <TableHead className="text-right font-bold text-xs uppercase tracking-wider">Qty</TableHead>
            <TableHead className="text-right font-bold text-xs uppercase tracking-wider">Investment</TableHead>
            <TableHead className="text-right font-bold text-xs uppercase tracking-wider">Portfolio %</TableHead>
            <TableHead className="text-center font-bold text-xs uppercase tracking-wider">Exchange</TableHead>
            <TableHead className="text-right font-bold text-xs uppercase tracking-wider">CMP</TableHead>
            <TableHead className="text-right font-bold text-xs uppercase tracking-wider">Present Value</TableHead>
            <TableHead className="text-right font-bold text-xs uppercase tracking-wider">Gain/Loss</TableHead>
            <TableHead className="text-right font-bold text-xs uppercase tracking-wider">P/E Ratio</TableHead>
            <TableHead className="text-right font-bold text-xs uppercase tracking-wider">Latest Earnings</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stocks.map((stock, index) => (
            <TableRow 
              key={stock.id} 
              className="hover:bg-primary/5 transition-all duration-200 border-b border-border/30"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <TableCell className="font-semibold text-foreground">{stock.particulars}</TableCell>
              <TableCell className="text-right font-mono text-muted-foreground">{formatCurrency(stock.purchasePrice)}</TableCell>
              <TableCell className="text-right font-mono text-muted-foreground">{stock.quantity}</TableCell>
              <TableCell className="text-right font-mono font-semibold">{formatCurrency(stock.investment)}</TableCell>
              <TableCell className="text-right font-mono text-muted-foreground">{stock.portfolioPercent.toFixed(2)}%</TableCell>
              <TableCell className="text-center">
                <Badge variant="outline" className="font-mono text-xs font-semibold border-primary/30 text-primary">
                  {stock.exchange}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="font-mono font-bold text-primary px-2 py-1 rounded bg-primary/10">
                  {formatCurrency(stock.cmp)}
                </div>
              </TableCell>
              <TableCell className="text-right font-mono font-semibold">{formatCurrency(stock.presentValue)}</TableCell>
              <TableCell className="text-right">
                <div className={`flex items-center justify-end gap-2 font-mono font-bold px-2 py-1 rounded ${
                  stock.gainLoss >= 0 ? "text-success bg-success/10" : "text-danger bg-danger/10"
                }`}>
                  {stock.gainLoss >= 0 ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <div>
                    <div>{formatCurrency(Math.abs(stock.gainLoss))}</div>
                    <div className="text-xs opacity-80">{formatPercent(stock.gainLossPercent)}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right font-mono font-semibold">{stock.peRatio?.toFixed(1) || "N/A"}</TableCell>
              <TableCell className="text-right font-mono text-sm font-semibold">{stock.latestEarnings || "N/A"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
