import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import ParkingList from "./parkinglist";
import Stats from "./Stats";

// const initialItems = [
// 	{ id: 1, description: "Passports", quantity: 2, packed: false },
// 	{ id: 2, description: "Socks", quantity: 12, packed: false },
// 	{ id: 3, description: "Charger", quantity: 2, packed: true },
// ];

export default function App() {
	const [items, setItems] = useState([]);

	function handleClear() {
		const confirmed = window.confirm(
			"Are you sure you want to delete all items"
		);

		if (confirmed) setItems([]);
	}

	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}

	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}
	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}
	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<ParkingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClear}
			/>
			<Stats items={items} />
		</div>
	);
}
