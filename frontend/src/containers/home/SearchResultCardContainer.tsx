import React, { useEffect, useState } from "react";
import SearchResultCard from "../../components/contents/SearchResultCard";
import SelectedCard from "../../components/contents/SelectedCard";

const SearchResultCardContainer: React.FC<{ data: any }> = ({ data }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleCardClick = (id: string | null) => {
    setSelectedId(selectedId !== id ? id : null);
  };

  return (
    <>
      {data.items.map((item: any) => (
        <React.Fragment key={item.id}>
          {item.id === selectedId ? (
            <SelectedCard snippet={item.snippet} videoId={item.id} />
          ) : (
            <SearchResultCard
              snippet={item.snippet}
              onClick={() => handleCardClick(item.id)}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default SearchResultCardContainer;
