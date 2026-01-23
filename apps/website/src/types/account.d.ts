export interface AccountTableEntry {
  name: string;
  tag: string;
  townhall: number;
  clan: {
    id: number;
    name: string;
    tag: string;
  };
}
