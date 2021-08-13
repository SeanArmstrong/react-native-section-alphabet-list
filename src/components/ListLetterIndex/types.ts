import { AlphabetListProps, ISectionData } from "../AlphabetList/types"

export interface ListLetterIndexProps {
    onPressLetter: (sectionIndex: number) => void;
    sectionData: ISectionData[];
    indexContainerStyle?: AlphabetListProps["indexContainerStyle"],
    indexLetterStyle?: AlphabetListProps["indexLetterStyle"],
    indexLetterContainerStyle?: AlphabetListProps["indexLetterContainerStyle"],
    indexLettersContainerStyle?: AlphabetListProps["indexLettersContainerStyle"],
    renderCustomIndexLetter?: AlphabetListProps["renderCustomIndexLetter"],
}
