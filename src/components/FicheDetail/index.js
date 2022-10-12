//les dépendances
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//Les assets
import "./style.scss";
import face from "../../assets/pictures/face-a-face.jpg";

//Les composants
import Header from "../Header";

// les actions
import { fetchOneAnimal, saveUrlAnimal } from "../../action/animal";

//****************** Le composant *******************
function FicheDetail() {
  //le useParmas permet d'extraire le slug de l'adresse web // la const doit porter le meme nome que la data que l'on souhaite extraire de l'url
  const { name } = useParams();
  console.log("Le Slug=>", name);

  const dispatch = useDispatch();
  //console.log('les proptype de la fiche =>', FicheDetail.prototype[name]);


  //!|| Attention, il vaut mieux faire un appel API lors du clic sur la card comme ca pas de contradition entre l'url et la vitesse de chargement du dom
  //! V  Plutot utiliser les props et les stocker dans le stat
  useEffect(() => {
    // On veut recup un objet directement depuis l'API
    // Pour ça, on va dispatcher une action (émettre l'intention de charger les animaux)
    dispatch(fetchOneAnimal(name));
  }, []);

  const animalSlug = useSelector((state) => state.animal.SlugFiche);
  const data = { ...animalSlug };
  const Location0 = { ...data.locations }[0];
  const Location1 = { ...data.locations }[1];
  const Location2 = { ...data.locations }[2];
  const taxonomy0 = { ...data.taxonomy };
  const characteristics0 = { ...data.characteristics };

  console.log("test DataTransfer", { ...animalSlug }); //OK Generale
  console.log("test DataTransfer1", { ...data.locations }[0]); //OK
  console.log("test DataTransfer2", { ...data.characteristics }); //OK

  // console.log('location une : ',locations[0][0]);
  // console.log('type : ', typeof locations);
  // const arrayDeLocation = [{...locations}];
  // console.log('spread de locations : ', arrayDeLocation);
  // console.log('type : ', typeof locations);
  // console.log('test de location', test.animalSlug);
  // const { locations } = animalSlug;
  // console.log (locations);
  // console.log('test DataTransfer', animalSlug);
  //console.log('les keys =>', Object.keys(animalSlug));
  //console.log("les values", Object.values(animalSlug));
  //console.log('les entries', Object.entries(animalSlug));

  return (
    <div>
      <Header />
      <div className="contener-main">
        <h1 className="Titre-name"> {name}</h1>
        <div className="contener-fiche">
          <div className="contener-picture">
            {/* l'image du l'animal*/}
            <img
              className="picture-animal"
              src={face}
              alt="animal picture"
            />{" "}
            {/****description******* */}
            <p className="description-animal"> {characteristics0.slogan}</p>
          </div>
          <div className="Contener-infos">
            <div className="contener-modeDeVie contener-generique">
              {/****mode de vie******* */}
              <h1 className="titre-modeDeVie titre-generique">Mode de vie</h1>
              <div className="wrapper-info">
                <div className="Info-generique">
                  <p className="titre-info">Group behavior</p>
                  <p className="dataToGet">
                    {" "}
                    {characteristics0.group_behavior}
                  </p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Habitat</p>
                  <p className="dataToGet"> {characteristics0.habitat}</p>
                </div>

                <div className="Info-generique">
                  <p className="titre-info">Top_speed</p>
                  <p className="dataToGet"> {characteristics0.top_speed}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Lifestyle</p>
                  <p className="dataToGet"> {characteristics0.lifestyle}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Lifespan</p>
                  <p className="dataToGet"> {characteristics0.lifespan}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Estimated_population_size</p>
                  <p className="dataToGet">
                    {" "}
                    {characteristics0.estimated_population_size}
                  </p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Location</p>
                  <p className="dataToGet"> {characteristics0.location}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Most_distinctive_feature</p>
                  <p className="dataToGet">
                    {" "}
                    {characteristics0.most_distinctive_feature}
                  </p>
                </div>
              </div>
            </div>

            <div className="contener-classification contener-generique">
              {/****Classification******* */}
              <h1 className="titre-Classification titre-generique">
                Classification
              </h1>
              <div className="wrapper-info">
                <div className="Info-generique">
                  <p className="titre-info">Class</p>
                  <p className="dataToGet"> {taxonomy0.class}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Family</p>
                  <p className="dataToGet"> {taxonomy0.family}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Genus</p>
                  <p className="dataToGet"> {taxonomy0.genus}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Kingdom</p>
                  <p className="dataToGet"> {taxonomy0.kingdom}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Order</p>
                  <p className="dataToGet"> {taxonomy0.order}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Phylum</p>
                  <p className="dataToGet"> {taxonomy0.phylum}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Scientific name</p>
                  <p className="dataToGet"> {taxonomy0.scientific_name}</p>
                </div>
                {/*ici on teste !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                <div className="Info-generique">
                  <p className="titre-info">Test</p>
                  <p className="dataToGet"> Hello</p>
                </div>
              </div>
            </div>

            <div className="contener-corps contener-generique">
              {/****Corps******* */}
              <h1 className="titre-Corps titre-generique">Corps</h1>
              <div className="wrapper-info">
                <div className="Info-generique">
                  <p className="titre-info">Color</p>
                  <p className="dataToGet"> {characteristics0.color}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Height</p>
                  <p className="dataToGet"> {characteristics0.height}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Length</p>
                  <p className="dataToGet"> {characteristics0.length}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Weight</p>
                  <p className="dataToGet"> {characteristics0.weight}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Skin type</p>
                  <p className="dataToGet"> {characteristics0.skin_type}</p>
                </div>
              </div>
            </div>

            <div className="contener-enviromenent contener-generique">
              {/****enviroment******* */}
              <h1 className="titre-environnement titre-generique">
                Environnement
              </h1>
              <div className="wrapper-info">
                <div className="Info-generique">
                  <p className="titre-info">Location</p>
                  <p className="dataToGet">  {Location0} {Location1} {Location2}
                  </p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Water type</p>
                  <p className="dataToGet"> {characteristics0.water_type}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Optimum ph level</p>
                  <p className="dataToGet"> {characteristics0.optimum_ph_level}
                  </p>
                </div>
              </div>
            </div>

            <div className="contener-reproduction contener-generique">
              {/****Reproduction******* */}
              <h1 className="titre-reproduction titre-generique">
                Reproduction
              </h1>
              <div className="wrapper-info">
                <div className="Info-generique">
                  <p className="titre-info">Age of sexual maturity</p>
                  <p className="dataToGet"> {characteristics0.age_of_sexual_maturity}
                  </p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Gestation period</p>
                  <p className="dataToGet"> {characteristics0.gestation_period}
                  </p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Age of weaning</p>
                  <p className="dataToGet"> {characteristics0.age_of_weaning}
                  </p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Name of young</p>
                  <p className="dataToGet"> {characteristics0.name_of_young}</p>
                </div>
              </div>
            </div>

            <div className="contener-alimentaire contener-generique">
              {/****regime alimentaire******* */}
              <h1 className="titre-régimeAlimentaire titre-generique">
                Régime alimentaire
              </h1>
              <div className="wrapper-info">
                <div className="Info-generique">
                  <p className="titre-info">Diet</p>
                  <p className="dataToGet"> {characteristics0.diet}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Favorite food</p>
                  <p className="dataToGet"> {characteristics0.favorite_food}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Biggest threat</p>
                  <p className="dataToGet"> {characteristics0.biggest_threat}
                  </p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Predators</p>
                  <p className="dataToGet"> {characteristics0.predators}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Prey</p>
                  <p className="dataToGet"> {characteristics0.prey}</p>
                </div>
                <div className="Info-generique">
                  <p className="titre-info">Main prey</p>
                  <p className="dataToGet"> {characteristics0.main_prey}</p>
                </div>
              </div>
            </div>

            <div className="contener-none">
              <p> {characteristics0.average_clutch_size}</p>
              <p> {characteristics0.common_name}</p>
              <p> {characteristics0.litter_size}</p>
              <p> {characteristics0.number_of_species}</p>
              <p> {characteristics0.origin}</p>
              <p> {characteristics0.type}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FicheDetail;
