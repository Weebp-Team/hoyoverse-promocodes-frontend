import React from 'react';
import PropTypes from 'prop-types';
import style from './PromocodeList.module.css';
import PromocodeListItem from './PromocodeListItem';

const PromocodeList = ({ data }) => {
    return (
        <div className={style.container}>
            {data.result && (
                <div className={style.box}>
                    {data.result.map((item) => {
                        return (
                            <PromocodeListItem
                                key={item.id}
                                data={item}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

PromocodeList.propTypes = {
    data: PropTypes.objectOf().isRequired,
};

export default PromocodeList;
