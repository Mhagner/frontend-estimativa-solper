import React from 'react';
import { Link } from 'react-router-dom'

const Breadcrumb = ({ lista }) => {
    return (
        <nav ariaLabel="breadcrumb">
            <ol className="breadcrumb">
                {lista.map((item, index) => (
                    <li
                        key={index}
                        className="breadcrumb-tem"
                        ariaCurrent={item.current}>
                        {item.link &&
                            <Link
                                className={`breadcrumb-item ${item.ativo}`}
                                to={item.link}>{item.descricao}
                            </Link>}
                        {!item.link &&
                            ` /${item.descricao}`}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
