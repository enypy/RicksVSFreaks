import ProgressBar from './ProgressBar';
import { useSelector, useDispatch } from 'react-redux';

export default function Monster() {
    const monster = useSelector((state) => state.fight.monster)

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="card-monstre col-sm-12">
                        <div id="monsterCard">
                            <div className="text-center">
                                <div className="row">
                                    {monster.pv > 0 ? <div className="col-sm-2 offset-sm-3">
                                        <span className="badge badge-danger ml-2 " id="degatSpanMonster"></span>
                                        <img className="img-fluid" src="http://res.publicdomainfiles.com/pdf_view/67/13925387417373.png" alt='monster' />
                                    </div> : "Victory"}

                                    <div id="comboOnMonster" className="col-sm-6">

                                    </div>
                                </div>
                            </div>
                            <ProgressBar pv={monster.pv} pvMax={monster.pvMax} bgType='bg-danger' faType='fa-heart' barName=' : pv' />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}