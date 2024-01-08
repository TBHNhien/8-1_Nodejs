// function responseReturn(res,status,sucess,data){
//     res.send(status, {
//         sucess: sucess,
//         data: data
//       });
// }
// module.exports={
//     responseReturn:responseReturn,
// }

function responseReturn(res, status, success, data) {
    res.status(status).send({
        success: success,
        data: data
    });
}

module.exports = {
    responseReturn: responseReturn,
};
