function FooterList({ categoryName, categoryArray }) {
    return (
        <div>
            <h2 className="font-medium mb-6 text-xl">{categoryName}</h2>
            <ul className="space-y-2 text-sm">
                {
                    categoryArray.map(({ name, link }, index) => (
                        <li>
                            <a key={index} href={link} className="cursor-pointer hover:text-orange-400 hover:ms-4 transtion-all duration-200">{name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default FooterList;