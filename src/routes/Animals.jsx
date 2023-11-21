import Card from "../components/Card";
// import { animals } from '../animalsList';

const Animals = ({ handleSearch, animals, search, handleDelete, handleLikes }) => {
    return (
        <>
            <div className="search-bar">
                <input type="text" placeholder="Search" onChange={handleSearch} />
                <span className="material-symbols-outlined"> search </span>
            </div>
            <div className="cards">
                {animals.filter(animal => animal.name.toLowerCase().includes(search.toLowerCase())).map(animal => (
                    <Card 
                        key={animal.name} 
                        {...animal} 
                        onButtonClick={() => handleDelete(animal.name)}
                        addLike={() => handleLikes(animal.name, 'add')}
                        removeLike={() => handleLikes(animal.name, 'remove')}
                    />
                ))}
            </div>
        </>
    )
}

export default Animals;