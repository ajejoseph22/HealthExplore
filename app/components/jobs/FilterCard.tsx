import React from "react";
import { formatNumberWithCommas } from "../../services/formatters";
import { Dialog } from "../common/Dialog";

export interface IFilterCardProps {
  title: string;
  filters: Array<{
    key: string;
    doc_count: number;
  }>;
  maxItems?: number;
}
export const FilterCard = (props: IFilterCardProps) => {
  const maxItems = props.maxItems || 10;
  const showMore = props.filters.length > maxItems;
  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-white px-4 py-4 mb-4 text-gray-900">
      <p className="uppercase font-semibold text-sm pb-4">{props.title}</p>
      {props.filters.slice(0, maxItems).map((filter) => (
        <p className="text-sm pb-1 text-gray-900">
          <span className="hover:underline cursor-pointer">{filter.key}</span>{" "}
          <span className="text-xs text-gray-400 pl-1">
            {formatNumberWithCommas(filter.doc_count)}
          </span>
        </p>
      ))}
      {showMore && (
        <span
          className="text-blue-500 hover:underline text-sm cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          Show more
        </span>
      )}
      <Dialog title={props.title} open={open} onClose={() => setOpen(false)}>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {props.filters.slice(0, maxItems).map((filter) => (
            <p className="text-sm pb-1 text-gray-900">
              <span className="hover:underline cursor-pointer">
                {filter.key}
              </span>{" "}
              <span className="text-xs text-gray-400 pl-1">
                {formatNumberWithCommas(filter.doc_count)}
              </span>
            </p>
          ))}
        </div>
      </Dialog>
    </div>
  );
};
