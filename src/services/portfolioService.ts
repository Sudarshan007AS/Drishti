import { Stock, CalculatedStock, SectorSummary } from "@/types/portfolio";


export const mockStocks: Stock[] = [
  {
  id: "1",
  particulars: "HDFC Bank",
  sector: "Financials",
  purchasePrice: 1580,
  quantity: 60,
  exchange: "NSE",
  cmp: 1625,
  peRatio: 18.7,
  latestEarnings: "₹16,250 Cr",
},
{
  id: "2",
  particulars: "Bajaj Finance",
  sector: "Financials",
  purchasePrice: 6500,
  quantity: 10,
  exchange: "NSE",
  cmp: 6750,
  peRatio: 32.4,
  latestEarnings: "₹3,550 Cr",
},
{
  id: "3",
  particulars: "ICICI Bank",
  sector: "Financials",
  purchasePrice: 920,
  quantity: 80,
  exchange: "NSE",
  cmp: 980,
  peRatio: 16.8,
  latestEarnings: "₹10,450 Cr",
},
{
  id: "4",
  particulars: "Bajaj Housing",
  sector: "Financials",
  purchasePrice: 5400,
  quantity: 12,
  exchange: "NSE",
  cmp: 5650,
  peRatio: 29.2,
  latestEarnings: "₹1,420 Cr",
},
{
  id: "5",
  particulars: "Savani Financials",
  sector: "Financials",
  purchasePrice: 110,
  quantity: 200,
  exchange: "NSE",
  cmp: 124,
  peRatio: 18.4,
  latestEarnings: "₹12 Cr",
},
{
  id: "6",
  particulars: "Affle India",
  sector: "Technology",
  purchasePrice: 1150,
  quantity: 20,
  exchange: "NSE",
  cmp: 1225,
  peRatio: 56.4,
  latestEarnings: "₹70 Cr",
},
{
  id: "7",
  particulars: "LTI Mindtree",
  sector: "Technology",
  purchasePrice: 5200,
  quantity: 8,
  exchange: "NSE",
  cmp: 5450,
  peRatio: 33.2,
  latestEarnings: "₹1,150 Cr",
},
{
  id: "8",
  particulars: "KPIT Tech",
  sector: "Technology",
  purchasePrice: 1450,
  quantity: 30,
  exchange: "NSE",
  cmp: 1535,
  peRatio: 68.5,
  latestEarnings: "₹98 Cr",
},
{
  id: "9",
  particulars: "Tata Tech",
  sector: "Technology",
  purchasePrice: 870,
  quantity: 40,
  exchange: "NSE",
  cmp: 915,
  peRatio: 62.7,
  latestEarnings: "₹410 Cr",
},
{
  id: "10",
  particulars: "BLS E-Services",
  sector: "Technology",
  purchasePrice: 230,
  quantity: 120,
  exchange: "NSE",
  cmp: 255,
  peRatio: 42.3,
  latestEarnings: "₹40 Cr",
},
{
  id: "11",
  particulars: "Tanla",
  sector: "Technology",
  purchasePrice: 1100,
  quantity: 18,
  exchange: "NSE",
  cmp: 1180,
  peRatio: 35.6,
  latestEarnings: "₹220 Cr",
},
{
  id: "12",
  particulars: "Dmart",
  sector: "Consumer Goods",
  purchasePrice: 3650,
  quantity: 10,
  exchange: "NSE",
  cmp: 3790,
  peRatio: 102.4,
  latestEarnings: "₹690 Cr",
},
{
  id: "13",
  particulars: "Tata Consumer",
  sector: "Consumer Goods",
  purchasePrice: 900,
  quantity: 50,
  exchange: "NSE",
  cmp: 945,
  peRatio: 72.2,
  latestEarnings: "₹380 Cr",
},
{
  id: "14",
  particulars: "Pidilite",
  sector: "Consumer Goods",
  purchasePrice: 2300,
  quantity: 15,
  exchange: "NSE",
  cmp: 2440,
  peRatio: 87.5,
  latestEarnings: "₹285 Cr",
},
{
  id: "15",
  particulars: "Tata Power",
  sector: "Energy",
  purchasePrice: 240,
  quantity: 150,
  exchange: "NSE",
  cmp: 260,
  peRatio: 27.4,
  latestEarnings: "₹1,050 Cr",
},
{
  id: "16",
  particulars: "KPI Green",
  sector: "Energy",
  purchasePrice: 950,
  quantity: 25,
  exchange: "NSE",
  cmp: 1010,
  peRatio: 38.6,
  latestEarnings: "₹120 Cr",
},
{
  id: "17",
  particulars: "Suzlon",
  sector: "Energy",
  purchasePrice: 31,
  quantity: 600,
  exchange: "NSE",
  cmp: 39,
  peRatio: 68.4,
  latestEarnings: "₹98 Cr",
},
{
  id: "18",
  particulars: "Gensol",
  sector: "Energy",
  purchasePrice: 830,
  quantity: 30,
  exchange: "NSE",
  cmp: 890,
  peRatio: 55.3,
  latestEarnings: "₹48 Cr",
},
{
  id: "19",
  particulars: "Hariom Pipes",
  sector: "Industrials",
  purchasePrice: 620,
  quantity: 40,
  exchange: "NSE",
  cmp: 670,
  peRatio: 24.8,
  latestEarnings: "₹60 Cr",
},
{
  id: "20",
  particulars: "Astral",
  sector: "Industrials",
  purchasePrice: 1750,
  quantity: 12,
  exchange: "NSE",
  cmp: 1825,
  peRatio: 68.0,
  latestEarnings: "₹260 Cr",
},
{
  id: "21",
  particulars: "Polycab",
  sector: "Industrials",
  purchasePrice: 4200,
  quantity: 6,
  exchange: "NSE",
  cmp: 4380,
  peRatio: 41.2,
  latestEarnings: "₹650 Cr",
},
{
  id: "22",
  particulars: "Clean Science",
  sector: "Chemicals",
  purchasePrice: 1430,
  quantity: 18,
  exchange: "NSE",
  cmp: 1505,
  peRatio: 48.5,
  latestEarnings: "₹72 Cr",
},
{
  id: "23",
  particulars: "Deepak Nitrite",
  sector: "Chemicals",
  purchasePrice: 1950,
  quantity: 15,
  exchange: "NSE",
  cmp: 2010,
  peRatio: 27.9,
  latestEarnings: "₹250 Cr",
},
{
  id: "24",
  particulars: "Fine Organic",
  sector: "Chemicals",
  purchasePrice: 4000,
  quantity: 5,
  exchange: "NSE",
  cmp: 4210,
  peRatio: 52.6,
  latestEarnings: "₹145 Cr",
},
{
  id: "25",
  particulars: "Gravita",
  sector: "Metals",
  purchasePrice: 520,
  quantity: 50,
  exchange: "NSE",
  cmp: 556,
  peRatio: 18.9,
  latestEarnings: "₹90 Cr",
},
{
  id: "26",
  particulars: "SBI Life",
  sector: "Insurance",
  purchasePrice: 1280,
  quantity: 20,
  exchange: "NSE",
  cmp: 1355,
  peRatio: 55.1,
  latestEarnings: "₹380 Cr",
},
{
  id: "27",
  particulars: "Infosys",
  sector: "Technology",
  purchasePrice: 1450,
  quantity: 25,
  exchange: "NSE",
  cmp: 1530,
  peRatio: 24.3,
  latestEarnings: "₹6,800 Cr",
},
{
  id: "28",
  particulars: "Happiest Minds",
  sector: "Technology",
  purchasePrice: 890,
  quantity: 35,
  exchange: "NSE",
  cmp: 940,
  peRatio: 72.5,
  latestEarnings: "₹54 Cr",
},
{
  id: "29",
  particulars: "EaseMyTrip",
  sector: "Technology",
  purchasePrice: 44,
  quantity: 300,
  exchange: "NSE",
  cmp: 51,
  peRatio: 68.0,
  latestEarnings: "₹48 Cr",
}
];

export const calculateStock = (stock: Stock, totalInvestment: number): CalculatedStock => {
  const investment = stock.purchasePrice * stock.quantity;
  const presentValue = stock.cmp * stock.quantity;
  const gainLoss = presentValue - investment;
  const gainLossPercent = (gainLoss / investment) * 100;
  const portfolioPercent = (investment / totalInvestment) * 100;

  return {
    ...stock,
    investment,
    portfolioPercent,
    presentValue,
    gainLoss,
    gainLossPercent,
  };
};

export const groupBySector = (stocks: CalculatedStock[]): SectorSummary[] => {
  const sectors = new Map<string, CalculatedStock[]>();

  stocks.forEach((stock) => {
    if (!sectors.has(stock.sector)) {
      sectors.set(stock.sector, []);
    }
    sectors.get(stock.sector)!.push(stock);
  });

  return Array.from(sectors.entries()).map(([sector, sectorStocks]) => {
    const totalInvestment = sectorStocks.reduce((sum, s) => sum + s.investment, 0);
    const totalPresentValue = sectorStocks.reduce((sum, s) => sum + s.presentValue, 0);
    const gainLoss = totalPresentValue - totalInvestment;
    const gainLossPercent = (gainLoss / totalInvestment) * 100;

    return {
      sector,
      totalInvestment,
      totalPresentValue,
      gainLoss,
      gainLossPercent,
      stocks: sectorStocks,
    };
  });
};


export const simulatePriceUpdate = (currentPrice: number): number => {
  const change = (Math.random() - 0.5) * 20; 
  const newPrice = currentPrice + change;
  return Math.max(newPrice, currentPrice * 0.95); 
};


export const fetchYahooFinancePrice = async (symbol: string): Promise<number> => {
  
  
  console.log(`Fetching price for ${symbol} from Yahoo Finance`);
  return mockStocks.find((s) => s.particulars === symbol)?.cmp || 0;
};

export const fetchGoogleFinanceData = async (
  symbol: string
): Promise<{ peRatio: number; latestEarnings: string }> => {
  
  
  console.log(`Fetching P/E and earnings for ${symbol} from Google Finance`);
  const stock = mockStocks.find((s) => s.particulars === symbol);
  return {
    peRatio: stock?.peRatio || 0,
    latestEarnings: stock?.latestEarnings || "N/A",
  };
};
