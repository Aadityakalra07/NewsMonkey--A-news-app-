import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card news-card border-0 shadow-sm h-100" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0',
                        zIndex: 1
                    }}>
                        <span className="badge rounded-pill" style={{ background: 'linear-gradient(135deg, #e94560, #c23152)', fontSize: '0.75rem', padding: '6px 12px', margin: '10px' }}>
                            {source}
                        </span>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <img src={!imageUrl ? "https://media.cnn.com/api/v1/images/stellar/prod/2025-02-03t004552z-1600891131-mt1aap0007m5tr0-rtrmadp-3-townsville-weather.jpg?c=16x9&q=w_800,c_fill" : imageUrl} className="card-img-top news-card-img" alt="..." style={{ height: '200px', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                    </div>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold" style={{ fontSize: '1rem', lineHeight: '1.4' }}>{title}</h5>
                        <p className="card-text text-muted" style={{ fontSize: '0.875rem', flexGrow: 1 }}>{description}...</p>
                        <div>
                            <p className="card-text mb-2"><small className="text-muted" style={{ fontSize: '0.75rem' }}>
                                <span style={{ color: '#e94560', fontWeight: '600' }}>{!author ? "Unknown" : author}</span> &bull; {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </small></p>
                            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm w-100" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)', color: '#fff', borderRadius: '8px', fontWeight: '500', transition: 'all 0.3s ease' }}>Read More &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
