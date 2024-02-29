import { Request, Response } from "express";

async function somar(req:Request, res:Response): Promise<Response> {
  const {a,b} = req.body;
  if( a == undefined || b == undefined ){
    return res.json({message:"Valores necessários"});
  }
  const r = a + b;
  return res.json({r});
}

test("Soma com sucesso", async () => {
    const req = {body:{a:2,b:3}} as Request;
    const res = {json:jest.fn()} as unknown as Response;

    await somar(req,res);

    expect(res.json).toHaveBeenCalledWith({r:5});
});

test("Soma com falha", async () => {
    const req = {body:{}} as Request;
    const res = {json:jest.fn()} as unknown as Response;

    await somar(req,res);

    expect(res.json).toHaveBeenCalledWith({message:"Valores necessários"});
});

