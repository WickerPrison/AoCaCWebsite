const { singleFetch } = require("./getData")

module.exports = async () => {
    const data = await singleFetch("ScholarlySpells");
    
}