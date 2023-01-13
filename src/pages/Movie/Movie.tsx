import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { movieByIDQuery } from "../../api/movies";
import Image from "../../common/components/Image";

const Movie = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const { data } = useQuery(["movie", id], movieByIDQuery(Number(id)));

  return (
    <main>
      <div
        style={{
          width: state.width + 40 + "px",
          height: state.height + 40 + "px",
        }}
      >
        <Image
          initial={{
            position: "absolute",
            left: state.x + "px",
            top: state.y + "px",
            width: state.width + "px",
            height: state.height + "px",
            borderRadius: 10 + "px",
          }}
          animate={{
            left: 20 + "px",
            top: 100 + "px",
          }}
          transition={{
            type: "tween",
          }}
          src={state.image}
          alt={state.title}
        />
      </div>
      <h1>{data?.title}</h1>
    </main>
  );
};

export default Movie;
