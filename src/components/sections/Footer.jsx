import logo from "../../assets/eCommerceLogo.svg"
import FooterList from "../FooterList";

function Footer() {
    const categories = [
        [
            { name: "Fashion", link: "#" },
            { name: "Education Product", link: "#" },
            { name: "Frozen Food", link: "#" },
            { name: "Beverages", link: "#" },
            { name: "Organic Grocery", link: "#" },
            { name: "Office Supplies", link: "#" },
            { name: "Beauty Products", link: "#" },
            { name: "Books", link: "#" },
            { name: "Electronics & Gadget", link: "#" },
            { name: "Travel Accessories", link: "#" },
            { name: "Fitness", link: "#" },
            { name: "Sneakers", link: "#" },
            { name: "Toys", link: "#" },
            { name: "Furniture", link: "#" }
        ],
        [
            { name: "About Shopcart", link: "#" },
            { name: "Careers", link: "#" },
            { name: "News & Blog", link: "#" },
            { name: "Help", link: "#" },
            { name: "Press Center", link: "#" },
            { name: "Shop By Location", link: "#" },
            { name: "Shopcart Brands", link: "#" },
            { name: "Affiliate & Partners", link: "#" },
            { name: "Ideas & Guides", link: "#" }
        ],
        [
            { name: "Gift Card", link: "#" },
            { name: "Mobile App", link: "#" },
            { name: "Shipping & Delivery", link: "#" },
            { name: "Order Pickup", link: "#" },
            { name: "Account Signup", link: "#" }
        ],
        [
            { name: "Shopcart Help", link: "#" },
            { name: "Returns", link: "#" },
            { name: "Track Orders", link: "#" },
            { name: "Contact Us", link: "#" },
            { name: "Feedback", link: "#" },
            { name: "Security & Fraud", link: "#" }
        ]
    ];
    const categoryName = ["Department", "About Us", "Services", "Help"]

    console.log()

    return (
        <section className="space-y-8 p-4 max-w-7xl mx-auto">
            <img src={logo} alt="image of logo" />
            <p className="text-sm">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

            <div className="grid grid-cols-2 gap-4 place-items-center">
                {
                    categories.map((categoryArray, index) => (
                        <FooterList categoryArray={categoryArray} categoryName={categoryName[index]} />
                    ))
                }
            </div>

            <p className="text-sm text-center">
                All Right reserved by Musemind ui/ux design agency | 2022
            </p>
        </section >
    );
}

export default Footer;