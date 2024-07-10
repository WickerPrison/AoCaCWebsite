export default function getUrl() {
    switch(process.env.NODE_ENV){
        case 'development':
            return 'http://localhost:3001';
        case 'production':
            return 'https://conquestandcalamity.up.railway.app:3001';
    }
}
