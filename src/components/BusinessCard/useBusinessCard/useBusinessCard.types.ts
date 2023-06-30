export type GoToBusiness = (
  event: Event | React.BaseSyntheticEvent
) => void;

export type UseBusinessCard = (
  params: {
    total:number;
    index: number;
    url: string;
    fetchData: () => void;
  }
) => {
  ref: any;
  goToBusiness: GoToBusiness;
}
