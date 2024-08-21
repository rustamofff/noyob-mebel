import React from "react";
import EmptyImg from "../../public/images/empty.png";

export default function EmptyState() {
  return (
    <div className="empty-state flex items-center justify-center flex-col h-full text-center text-current text-base">
      <img
        src="https://png.pngtree.com/png-vector/20190721/ourlarge/pngtree-empty-box-icon-for-your-project-png-image_1561657.jpg"
        alt="Empty State"
        className="empty-state-img h-auto w-96"
      />
    </div>
  );
}
