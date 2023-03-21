import { categoriesListForFilter } from "../../constants/categories";
import CategoriesDropdown from "../../common/categories-dropdown";

function FilterTasks() {
    return (
        <div className='filter'>
            <div className='input-wrapper'>
                <label for='category-filter'>
                    Category Filter:
                    <CategoriesDropdown
                        categoriesList={categoriesListForFilter}
                    />
                </label>
            </div>
        </div>
    );
}

export default FilterTasks;
