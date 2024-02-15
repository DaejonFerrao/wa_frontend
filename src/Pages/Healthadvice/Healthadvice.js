import "./Healthadvice.css";

const Healthadvice = () => {
    return (
        <div>
            <div className="air-quality">
                <div className="template-root" style="display:none">
                    <div className="basic-header" style="visibility:hidden">
                        <div className="header-placeholder">
                            <div className="tabs-content">
                                <div id="pollutants" class="tab-content pollutants">
                                    <div className="air-quality-pollutants new-colours">
                                        <div className="column">
                                            <div className="display-type">
                                                "NO"
                                                <sub conditional="NO"></sub>
                                            </div>
                                            <div className="category-color-bar poor">
                                                <div className="category">
                                                </div>
                                                <div className="column mobile-middle">
                                                    <div className="pollutant-index">56</div>
                                                    <div className="pollutant-concentration">47 mg</div>
                                                </div>
                                                <div className="column">
                                                    <div className="statement-wrapper trimmed">
                                                        <div className="statement">
                                                            <div className="show-more-statement">

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="column">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Healthadvice;
