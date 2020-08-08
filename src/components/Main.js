import React, {useState} from 'react';
import { ButtonGroup, Button, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import Img from '../images/img.jpg';
import Img2 from '../images/img2.jpg';
import Img3 from '../images/img3.jpg';
import Img4 from '../images/img4.jpg';
import Img5 from '../images/img5.jpg';

function Main(props) {
    const [start, setStart] = useState(true);
    const [ratesArr, setRatesArr] = useState([]);
    const [m1, setM1]=useState('');
    const [movies, setMovies] = useState([
        {name: 'name5', description: 'bla bla bla..', imgUrl: Img, rate: 1, rateArr: [1]},
        {name: 'name2', description: 'bla bla bla..', imgUrl: Img2, rate: 2, rateArr: [2]},
        {name: 'name4', description: 'bla bla bla..', imgUrl: Img3, rate: 3, rateArr: [3]},
        {name: 'name1', description: 'bla bla bla..', imgUrl: Img4, rate: 3, rateArr: [3]},
        {name: 'name3', description: 'bla bla bla..', imgUrl: Img5, rate: 1, rateArr: [1]},
        
]);
var  namesArr = [];
    if(start){
        for(let i=0;i<movies.length;i++){
            namesArr.push(movies[i].name);
        }
        namesArr.sort();
        let newArr = [];
        for(let i=0;i<namesArr.length;i++){
            for(let j=0;j<movies.length;j++){
                if(namesArr[i]===movies[j].name){
                    newArr.push(movies[j])
                }
            }
        }
        setMovies(newArr);
        setStart(false);
        let t=0, t2=0, t3=0;
        let n='', n2='';
        let m1,m2,m3;
        for(let i=0;i<movies.length;i++){
            if(movies[i].rate>t){
                t=movies[i].rate;
                n=movies[i].name;
                m1=movies[i];
            }
        }
        for(let i=0;i<movies.length;i++){
            if(movies[i].rate>t2 && movies[i].name!==n){
                t2=movies[i].rate;
                n2 = movies[i].name;
                m2=movies[i];
            }
        }
        for(let i=0;i<movies.length;i++){
            if(movies[i].rate>t3 && movies[i].name!==n && movies[i].name !== n2){
                t3=movies[i].rate;
                m3=movies[i];
            }
        }
        setM1(m1);
        setRatesArr([m1,m2,m3]);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4 box'>
                    <div className='row'>
                        <div className='col-4'></div>
                        <div className='col-4'>
                        <h1>BM</h1>
                        </div>
                        <div className='col-4'></div>
                    </div>
                    <div className='row'>
                        {ratesArr.map((element,i)=>{
                            return <Link to={`/HomePage/bestMovie/${element.name}`}><div className='col-4' key={i} onClick={()=>{
                                setM1(element);
                                props.sname(element.name);
                            }}><div className='movieBox' style={{backgroundImage: 'url('+element.imgUrl+')'}}>{element.name}</div></div></Link>
                        })}
                    </div>
                    <br />
                    <div className='row'>
                        <div className='col-9'>
                            <div className='row popularBox'>
                                <label>{m1.name}</label>
                            </div>
                            <div className='row popularBox'>
                                <div className='col-1'></div>
                                <div className='col-9'>
                                <Image src={m1.imgUrl} rounded className='img' />
                                </div>
                                <div className='col-1'></div>
                            </div>
                            <div className='row popularBox'>
                                <label>{m1.description}</label>
                            </div>
                            <div className='row popularBox'>
                                <div className='col-10'></div>
                                <div className='col-2'><label>{m1.rate}</label></div>
                            </div>
                            <div className='row popularBox'>
                            <ButtonGroup size="sm" className='rate'>
                            <Button onClick={()=>{
                                for(let i=0;i<movies.length;i++){
                                    if(movies[i].name === m1.name){
                                        movies[i].rateArr.push(1);
                                        let sum=0;
                                        for(let j=0;j<movies[i].rateArr.length;j++){
                                            sum = sum + movies[i].rateArr[j];
                                        }
                                        let z = sum/movies[i].rateArr.length;

                                        movies[i].rate = z;
                                        m1.rate = z;

                                        setM1(m1)
                                        setMovies(movies)
                                    }
                                }
                            }}>1</Button>
                            <Button onClick={()=>{
                                for(let i=0;i<movies.length;i++){
                                    if(movies[i].name === m1.name){
                                        movies[i].rateArr.push(2);
                                        let sum=0;
                                        for(let j=0;j<movies[i].rateArr.length;j++){
                                            sum = sum + movies[i].rateArr[j];
                                        }
                                        let z = sum/movies[i].rateArr.length;

                                        movies[i].rate = z;
                                        m1.rate = z;

                                        setM1(m1)
                                        setMovies(movies)
                                    }
                                }
                            }}>2</Button>
                            <Button onClick={()=>{
                                for(let i=0;i<movies.length;i++){
                                    if(movies[i].name === m1.name){
                                        movies[i].rateArr.push(3);
                                        let sum=0;
                                        for(let j=0;j<movies[i].rateArr.length;j++){
                                            sum = sum + movies[i].rateArr[j];
                                        }
                                        let z = sum/movies[i].rateArr.length;

                                        movies[i].rate = z;
                                        m1.rate = z;

                                        setM1(m1)
                                        setMovies(movies)
                                    }
                                }
                            }}>3</Button>
                            <Button onClick={()=>{
                                for(let i=0;i<movies.length;i++){
                                    if(movies[i].name === m1.name){
                                        movies[i].rateArr.push(4);
                                        let sum=0;
                                        for(let j=0;j<movies[i].rateArr.length;j++){
                                            sum = sum + movies[i].rateArr[j];
                                        }
                                        let z = sum/movies[i].rateArr.length;

                                        movies[i].rate = z;
                                        m1.rate = z;

                                        setM1(m1)
                                        setMovies(movies)
                                    }
                                }
                            }}>4</Button>
                            <Button onClick={()=>{
                                for(let i=0;i<movies.length;i++){
                                    if(movies[i].name === m1.name){
                                        movies[i].rateArr.push(5);
                                        let sum=0;
                                        for(let j=0;j<movies[i].rateArr.length;j++){
                                            sum = sum + movies[i].rateArr[j];
                                        }
                                        let z = sum/movies[i].rateArr.length;
                                        movies[i].rate = z;
                                        m1.rate = z;
                                        setM1(m1)
                                        setMovies(movies)
                                    }
                                }
                            }}>5</Button>
                            </ButtonGroup>

                            </div>
                        </div>
                        <div className='col-3'>
                        <div className='row'><div>All Movies</div></div>
                        {movies.map((element,i)=>{
                         return   <Link to={`/HomePage/bestMovie/${element.name}`}><div className='row' key={i} onClick={()=>{
                             setM1(element)
                             props.sname(element.name);
                         }}><div className='movieBox2' style={{backgroundImage: 'url('+element.imgUrl+')'}}>{element.name}</div></div></Link>
                        })}
                        </div>
                    </div>
                </div>
                <div className='col-4'></div>
            </div>
        </div>
    );
}

export default Main;