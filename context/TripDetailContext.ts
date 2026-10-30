import { TripInfo } from "@/app/create-new-trip/_component/ChatBot";
import { createContext } from "react";

export type TripContextType = {
    tripDetailInfo : TripInfo | null;
    setTripDetailInfo: React.Dispatch<React.SetStateAction<TripInfo | null>>;
}

export const TripDetailContext = createContext<TripContextType|null>(null);