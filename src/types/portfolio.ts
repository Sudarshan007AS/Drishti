export interface Stock {
  id: string;
  particulars: string;
  sector: string;
  purchasePrice: number;
  quantity: number;
  exchange: "NSE" | "BSE";
  cmp: number;
  peRatio?: number;
  latestEarnings?: string;
}

export interface CalculatedStock extends Stock {
  investment: number;
  portfolioPercent: number;
  presentValue: number;
  gainLoss: number;
  gainLossPercent: number;
}

export interface SectorSummary {
  sector: string;
  totalInvestment: number;
  totalPresentValue: number;
  gainLoss: number;
  gainLossPercent: number;
  stocks: CalculatedStock[];
}
