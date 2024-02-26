import express, {NextFunction, Request, Response} from "express";

const app = express();
app.use(express.json());

app.listen(3000);

app.get("/", meio, meio2, function(req:Request,res:Response){
    const {nome,idade} = req.body;
    res.send(res.locals);
});

function meio(req:Request,res:Response, next:NextFunction){
    const {idade} = req.body;
    if( idade < 18 ){
        return res.send("De menor")
    }
    res.locals = {msg:"Não é de menor"};
    next();
}

function meio2(req:Request,res:Response, next:NextFunction){
    const {idade} = req.body;
    if( idade > 65 ){
        return res.send("3a idade")
    }
    next();
}