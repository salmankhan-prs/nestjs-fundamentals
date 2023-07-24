import { Controller, Get, HttpCode, Req, Body, Post, Res, UsePipes } from "@nestjs/common";
import { catDto, createCatSchema } from "../cat-dto";
import { CatsService } from "./cats.service";
import { JoiValidationPipe } from "src/exceptionexample/validation.pipe";
import { CreateCatDtoPipeTest, validationPipeUsingClassValidator } from "src/validation-pipe-using-class";

@Controller('/cats')
export class CatContoller {
    constructor(private catsService: CatsService) { }
    @Get()
    findAll() {
        return this.catsService.getAll()        // if we pass an array or object nest will stringfy it 
    }


    @Get('/async')
    @HttpCode(200)
    checkAsync() {
        //Asynchronicity can be handle nest self \\test rxjs

        return Promise.resolve(10) //promised will resolved  by the nestjs 
    }
    @Get('/:id')
    @HttpCode(202) //we can change http status code  code  [defalut 200 ,201]
    findOne(@Req() request, @Res() response) {
        console.log(request.params)   //we can se the direct express request and response 
        response.status(200).send("from native express response ")//we can use native express resposen object and send the rsponse [not recommended ]
    }
    @Post()
    createOne(@Body() createCatDto: catDto) {   //intsaed of using @req we can using @body @parms @ip @quers @Headers   so on 
        return this.catsService.create(createCatDto)  //ValidationPipe  can trimmimed any extra fielsd in the body
    }
    //validation pipe using joi
    @Post('/two')
    @UsePipes(new JoiValidationPipe(createCatSchema))
    createTwo(@Body() createCatDto: catDto) {   //intsaed of using @req we can using @body @parms @ip @quers @Headers   so on 
        return this.catsService.create(createCatDto)  //ValidationPipe  can trimmimed any extra fielsd in the body
    }

    //validation pipe using classs validator 
    @Post('/three')
    /// @UsePipes(new validationPipeUsingClassValidator())
    createThree(@Body(new validationPipeUsingClassValidator) createCatDto: CreateCatDtoPipeTest) {   //intsaed of using @req we can using @body @parms @ip @quers @Headers   so on 
        return this.catsService.create(createCatDto)  //ValidationPipe  can trimmimed any extra fielsd in the body
    }

} 