import { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { allCategories } from "../DataBase/allCategories";
import "..//styles/AllCategories.scss"

const COMPLETE_FILTER = {
    All: "All Categories",
    Shirts: "Shirts",
    T_Shirts: "T-Shirts",
    Bottoms: "Bottoms",
    Roompers: "Roompers",
    Hats: "Hats",
    Cotton: "Cotton",
    Linen: "Linen",
};

const CardList = ({ list = [] }) => {
    return (
        <>{list.map(({ id, cardLink, imgSrc, imgAlt, caption, stars, reviews, price }) => (
            <div key={id} className="product-card">
                <Link to={cardLink} className="product-card__link">
                  <img src={imgSrc} alt={imgAlt} />
                  <p className="product-card__caption">{caption}</p>
                </Link>
                <div className="product-card__reviews">
                  <img src={stars} alt="#" />
                  <p>{reviews}</p>
                </div>
                <span className="product-card__price">{price}</span>
            </div>
        ))}</>
    );
};

function FilterItem({ checked, onChange, name }) {
    return (
        <label>
          <input type="radio" checked={checked} name={name} value={name} onChange={onChange}/>
        {name}</label>
    );
}
const FiltersPanel = ({ curFilter, updateFilter }) => {
    const onFiltersChange = (e) => {
      const newFilter = e.target.value;
      updateFilter(newFilter);
    };

    return (
        <form id="shopFilters">
            <h4>Categories</h4>
            <FilterItem
              checked={curFilter === COMPLETE_FILTER.All}
              name={COMPLETE_FILTER.All}
              onChange={onFiltersChange}
            />
            <FilterItem
              checked={curFilter === COMPLETE_FILTER.Shirts}
              name={COMPLETE_FILTER.Shirts}
              onChange={onFiltersChange}
            />
            <FilterItem
              checked={curFilter === COMPLETE_FILTER.T_Shirts}
              name={COMPLETE_FILTER.T_Shirts}
              onChange={onFiltersChange}
            />
            <FilterItem
              checked={curFilter === COMPLETE_FILTER.Bottoms}
              name={COMPLETE_FILTER.Bottoms}
              onChange={onFiltersChange}
            />
            <FilterItem
              checked={curFilter === COMPLETE_FILTER.Roompers}
              name={COMPLETE_FILTER.Roompers}
              onChange={onFiltersChange}
            />
            <FilterItem
              checked={curFilter === COMPLETE_FILTER.Hats}
              name={COMPLETE_FILTER.Hats}
              onChange={onFiltersChange}
            />
            <h4>Fabric</h4>
            <FilterItem
              checked={curFilter === COMPLETE_FILTER.Cotton}
              name={COMPLETE_FILTER.Cotton}
              onChange={onFiltersChange}
            />
            <FilterItem
              checked={curFilter === COMPLETE_FILTER.Linen}
              name={COMPLETE_FILTER.Linen}
              onChange={onFiltersChange}
            />
        </form>
    );
};

export default function AllCategory() {
    const [filter, setFilter] = useState(COMPLETE_FILTER.All);

    const getfilteredCategories = (list, curFilter = COMPLETE_FILTER.All) => {
        if (curFilter === COMPLETE_FILTER.All) {
            return list;
        }else if (curFilter === COMPLETE_FILTER.Shirts) {
            const shirtsList = allCategories.slice(0, 3);
            return shirtsList;
        }else if (curFilter === COMPLETE_FILTER.T_Shirts) {
            const tShirtsList = allCategories.slice(3, 6);
            return tShirtsList;
        }else if (curFilter === COMPLETE_FILTER.Bottoms) {
            const bottomsList = allCategories.slice(6, 9);
            return bottomsList;
        }else if (curFilter === COMPLETE_FILTER.Roompers) {
            const roompersList = allCategories.slice(9, 12);
            return roompersList;
        }else if (curFilter === COMPLETE_FILTER.Hats) {
            const hatsList = allCategories.slice(12, 15);
            return hatsList;
        }
    };
    const filteredCategories = useMemo(() => getfilteredCategories(allCategories, filter), [filter]);

    const getfilteredFabric = (allCategories, curFilter = COMPLETE_FILTER.All) => {
        if (curFilter === COMPLETE_FILTER.Cotton) {
            const cottonList = allCategories.filter(fabric =>
            fabric.cotton === "cotton");
            return cottonList;
        }else if (curFilter === COMPLETE_FILTER.Linen) {
            const linenList = allCategories.filter(fabric =>
            fabric.linen === "linen");
            return linenList;
        }
    };
    const filteredFabric = useMemo(() => getfilteredFabric(allCategories, filter), [filter]);

    const handleFilterUpdate = useCallback((newFilter) => {
        setFilter(newFilter);
    }, []);
    
    return (
        <div className="shop">
            <div className="conteiner">

                <section className="shop__items">
                    <FiltersPanel curFilter={filter} updateFilter={handleFilterUpdate} />
                    <div className="products" style={{ gridTemplateRows: "1fr", }}>
                        <CardList list={filteredCategories} />
                        <CardList list={filteredFabric} />
                    </div>
                </section>
            </div>
        </div>
    );
}