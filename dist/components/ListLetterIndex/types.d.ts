import { AlphabetListProps, ISectionData } from "../AlphabetList/types";
export interface ListLetterIndexProps {
    onPressLetter: (sectionIndex: number) => void;
    sectionData: ISectionData[];
    indexContainerStyle?: AlphabetListProps["indexContainerStyle"];
    indexLetterStyle?: AlphabetListProps["indexLetterStyle"];
    indexLetterContainerStyle?: AlphabetListProps["indexLetterContainerStyle"];
    indexLettersContainerStyle?: AlphabetListProps["indexLettersContainerStyle"];
    extraViewStyle?: AlphabetListProps["extraViewStyle"];
    renderCustomIndexLetter?: AlphabetListProps["renderCustomIndexLetter"];
}
