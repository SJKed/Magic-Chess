import "./Tile.css"

export default function Tile({ number, image }) {
    return <div className="tile">
        {image && <div key={number} style={{ backgroundImage: `url(${image})` }} className="chess-piece"></div>}
    </div>
}