export type IFilterType = {
  key: string;
  doc_count: number;
  active?: boolean;
}

export interface IFiltersProps {
  heading: string;
  filters: IFilterType[];
}

const Filters = ({
  heading, filters
}: IFiltersProps) => {
  return (
    <div>

    </div>
  )
}

export default Filters;