function CategoriesDropdown(props) {
    return (
        <select
            id='category'
            value={props.selectedCategory}
            onChange={props.handleChange}
        >
            {props.categoriesList.map(categoryItem => {
                return (
                    <option
                        value={categoryItem.value}
                        selected={categoryItem.value === props.selectedCategory}
                    >
                        {categoryItem.label}
                    </option>
                );
            })}
        </select>
    );
}

export default CategoriesDropdown;
