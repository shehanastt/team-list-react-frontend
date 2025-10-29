export interface TeamMember {
  id: string;
  name: string;
  username: string;
  avatar: string;
  email: string;
  status: string[];
  role: string;
  teams: string[];
}


export type Status =
  | "active"
  | "busy"
  | "away"
  | "onleave"
  | "terminated"
  | "donotdisturb";

export type Teams =
  | "design"
  | "product"
  | "marketing"
  | "sales"
  | "hr"
  | "finance"
  | "develop";
