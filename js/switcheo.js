'use strict';

//  ---------------------------------------------------------------------------

const Exchange = require ('./base/Exchange');

//  ---------------------------------------------------------------------------

module.exports = class switcheo extends Exchange {
    describe () {
        return this.deepExtend (super.describe (), {
            'id': 'switcheo',
            'name': 'Switcheo',
            'countries': [ 'SG' ],
            'version': 'v2',
            'rateLimit': 500,
            'certified': true,
            // new metainfo interface
            'has': {
                'CORS': false,
                'fetchBidsAsks': true,
                'fetchTickers': true,
                'fetchMyTrades': true,
                'fetchOrder': true,
                'fetchOrders': true,
                'fetchOpenOrders': true,
                'fetchClosedOrders': true,
                'withdraw': true,
                'fetchFundingFees': true,
            },
            'timeframes': {
                '1m': '1m',
                '5m': '5m',
                '15m': '15m',
                '30m': '30m',
                '1h': '1h',
                '6h': '6h',
                '1d': '1d',
            },
            'urls': {
                'logo': 'https://docs.switcheo.network/images/logo.png',
                'api': {
                    'public': 'https://api.switcheo.network/v2/',
                    'account': 'https://api.switcheo.network/v2/',
                    'market': 'https://api.switcheo.network/v2/',
                    'v2': 'https://api.switcheo.network/v2/',
                },
                'www': 'http://www.switcheo.exchange/',
                'doc': [
                    'https://docs.switcheo.network/',
                ],
                'fees': [
                    'https://support.switcheo.network/switcheonetwork/switcheo-exchange-fee-structure/switcheo-exchange-fee-structure',
                ],
            },
            'api': {
                'public': {
                    'get': [
                        'tickers/candlesticks',
                        'tickers/last_24_hours',
                        'tickers/last_price',
                        'offers',
                    ],
                },
            },
            'fees': {
            },
            'exceptions': {
            },
            'options': {
                'hasAlreadyAuthenticatedSuccessfully': false,
            },
        });
    }
};
