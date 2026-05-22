export interface StudentInfo {
  name: string;
  course: string;
  institution: string;
  caseSelected: string;
  badge: string;
}

export interface IndicatorRow {
  indicator: string;
  text1: string; // 2022
  text2: string; // 2023
  variation: string;
  highlights: string;
  category: 'geral' | 'demografia' | 'regional' | 'trabalho' | 'jovens';
}

export interface Citation {
  field: string;
  author: string;
  title: string;
  edition: string;
  city: string;
  publisher: string;
  year: string;
  link: string;
}
