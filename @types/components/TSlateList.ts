export interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}
