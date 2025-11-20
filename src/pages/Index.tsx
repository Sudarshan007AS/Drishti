import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PortfolioSummaryCards } from "@/components/PortfolioSummaryCards";
import { SectorSummary } from "@/components/SectorSummary";
import {
  mockStocks,
  calculateStock,
  groupBySector,
  simulatePriceUpdate,
} from "@/services/portfolioService";
import { Stock, CalculatedStock } from "@/types/portfolio";
import { RefreshCw, ChartCandlestick } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [stocks, setStocks] = useState<Stock[]>(mockStocks);
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const { toast } = useToast();

  
  const totalInvestment = stocks.reduce(
    (sum, stock) => sum + stock.purchasePrice * stock.quantity,
    0
  );

  
  const calculatedStocks: CalculatedStock[] = stocks.map((stock) =>
    calculateStock(stock, totalInvestment)
  );

  
  const sectorSummaries = groupBySector(calculatedStocks);

  
  const totalPresentValue = calculatedStocks.reduce(
    (sum, stock) => sum + stock.presentValue,
    0
  );
  const totalGainLoss = totalPresentValue - totalInvestment;
  const totalGainLossPercent = (totalGainLoss / totalInvestment) * 100;

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsUpdating(true);
      setStocks((prevStocks) =>
        prevStocks.map((stock) => ({
          ...stock,
          cmp: simulatePriceUpdate(stock.cmp),
        }))
      );
      setLastUpdate(new Date());
      setTimeout(() => setIsUpdating(false), 500);
    }, 15000); 

    return () => clearInterval(interval);
  }, []);

  const handleManualRefresh = () => {
    setIsUpdating(true);
    setStocks((prevStocks) =>
      prevStocks.map((stock) => ({
        ...stock,
        cmp: simulatePriceUpdate(stock.cmp),
      }))
    );
    setLastUpdate(new Date());
    toast({
      title: "Portfolio Updated",
      description: "Stock prices have been refreshed successfully.",
    });
    setTimeout(() => setIsUpdating(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Animated background pattern */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)),transparent_50%)]" />
      </div>

      {/* Header */}
      <header className="border-b border-border/50 glass-card sticky top-0 z-10 shadow-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Left Section */}
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow shrink-0">
                <ChartCandlestick className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
                <div className="absolute inset-0 rounded-xl gradient-primary opacity-5" />
              </div>

              <div className="max-w-[200px] md:max-w-none">
                <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                  Dristhi
                </h1>
                <p className="text-xs md:text-sm text-muted-foreground font-medium leading-snug">
                  Live market insights to help you decide when to buy, sell, or
                  hold.
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center animate-slide-up sm:gap-4">
              {/* Last Updated */}
              <div className="text-center sm:text-right text-xs sm:text-sm px-3 py-2 rounded-lg bg-muted/50">
                <div className="text-muted-foreground text-[10px] sm:text-xs font-medium uppercase tracking-wide">
                  Last Updated
                </div>
                <div className="font-mono font-semibold text-foreground text-sm">
                  {lastUpdate.toLocaleTimeString()}
                </div>
              </div>

              {/* Refresh Button */}
              <Button
                onClick={handleManualRefresh}
                disabled={isUpdating}
                size="sm"
                className="gap-2 gradient-accent shadow-glow hover:shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <RefreshCw
                  className={`h-4 w-4 ${isUpdating ? "animate-spin" : ""}`}
                />
                <span className="font-semibold">Refresh</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Summary Cards */}
        <div className="animate-slide-up">
          <PortfolioSummaryCards
            totalInvestment={totalInvestment}
            totalPresentValue={totalPresentValue}
            totalGainLoss={totalGainLoss}
            totalGainLossPercent={totalGainLossPercent}
          />
        </div>

        {/* Sector-wise Portfolio */}
        <div
          className="space-y-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 gradient-primary rounded-full" />
            <h2 className="text-2xl font-bold text-foreground tracking-tight">
              Holdings by Sector
            </h2>
          </div>
          <div className="space-y-6">
            {sectorSummaries.map((summary, index) => (
              <div
                key={summary.sector}
                className="animate-slide-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <SectorSummary summary={summary} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 glass-card mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            {/* Left text */}
            <p className="font-mono font-bold text-primary gap-2 p-2 rounded-lg text-white gradient-accent shadow-glow w-full sm:w-auto text-center md:text-left">
              Track. Evaluate. Act.
            </p>

            {/* Right badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10">
              <p className="font-mono font-semibold text-primary text-center">
                
                Made with ❤️ by Sudarshan A S
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
