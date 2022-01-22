import React, { useState } from 'react';
import { Form, Input, message, Button } from 'antd';
import styled from 'styled-components';
import { Wheel } from 'react-custom-roulette';

const Index = () => {
	const [data, setData] = useState([]);
	const [mustSpin, setMustSpin] = useState(false);
	const [BotonOpt, setBotonOpt] = useState(false);
	const [prizeNumber, setPrizeNumber] = useState(0);
	const [Ganador, setGanador] = useState();
	// const [UrlAudio, setUrlAudio] = useState("https://firebasestorage.googleapis.com/v0/b/ruleta-b10b2.appspot.com/o/ruleta.mp3?alt=media&token=d6efbf16-3af5-4259-a1f1-ab3af1691bac");
	const [UrlAudio, setUrlAudio] = useState("https://firebasestorage.googleapis.com/v0/b/ruleta-b10b2.appspot.com/o/misc333.mp3?alt=media&token=46d7fcd8-6276-43c6-a970-8bfc4cd5dd92");
	const [UrlAudioGanador, setUrlAudioGanador] = useState("https://firebasestorage.googleapis.com/v0/b/ruleta-b10b2.appspot.com/o/bites-ta-da-winner.mp3?alt=media&token=5ca06e54-dc15-42bb-9685-65a35a02504b");
	const [UrlAudioEliminar, setUrlAudioEliminar] = useState("https://firebasestorage.googleapis.com/v0/b/ruleta-b10b2.appspot.com/o/eliimnar.mp3?alt=media&token=c437856e-f950-4e7d-ba50-aa28dee178bc");
	const [UrlAudioError, setUrlAudioError] = useState("https://firebasestorage.googleapis.com/v0/b/ruleta-b10b2.appspot.com/o/error.mp3?alt=media&token=fc601049-db3e-4ead-a3e1-6960bd26c6cf");
	
	const audio = new Audio(UrlAudio);
	const audioGanador = new Audio(UrlAudioGanador);
	const audioEliminar = new Audio(UrlAudioEliminar);
	const audioError = new Audio(UrlAudioError);

	const handleSpinClick = () => {
		audioGanador.pause();
		const newPrizeNumber = Math.floor(Math.random() * data.length);
		let dataGanador = data[newPrizeNumber];

		setTimeout(() => (
			audio.play()
		), 1000);


		setGanador(dataGanador);
		setPrizeNumber(newPrizeNumber);
		setMustSpin(true);
		setBotonOpt(true);
	};

	const aleatorio = (inferior,superior) => {
		let numPosibilidades = superior - inferior
		let aleat = Math.random() * numPosibilidades
		aleat = Math.floor(aleat)
		return parseInt(inferior) + aleat
	}

	const functionFinish = () => {
		audioGanador.play();
		message.success(`el jugador ${Ganador.option} es el ganador`);
		navigator.vibrate(800);
		audio.pause();
		setMustSpin(false);
		setBotonOpt(false);
	};

	const onFinish = async (values) => {
		let statusRes = true;
		for (let index = 0; index < data.length; index++) {
			const name = data[index].option;
			if (name.toLowerCase() === values.name.toLowerCase()) {
				statusRes = false;
			}
		}
		if (statusRes) {
			const hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
			let color_aleatorio = "#";
			for (let i=0;i<6;i++){
				let posarray = aleatorio(0,hexadecimal.length)
				color_aleatorio += hexadecimal[posarray]
			}
			setData([
				...data,
				{ option: values.name, style: { backgroundColor: color_aleatorio, textColor: 'black' }}
			]);
			message.success(`el jugador ${values.name} se agrego correctamente.`);
			document.getElementById("create-course-form").reset();
		} else {
			navigator.vibrate(400);
			audioEliminar.play();
			message.error(`el jugador ${values.name} esta repetido.`);
		}
    };

	const onFinishFailed = (errorInfo) => {
		navigator.vibrate(300);
		audioEliminar.play();
        message.error('Error, Complemente los datos restantes del formulario.');
    };

	const EliminarJugador = (infoDelete) => {
		navigator.vibrate(300);
        const oldArray = data;
		const i = oldArray.indexOf(infoDelete);
        oldArray.splice( i, 1 );
        const newArray = [...oldArray];
        setData(newArray);
		// audioEliminar.play();
		audioError.play();
        message.success(`el jugador ${infoDelete.option} se ha eliminado correctamente.`);
    }

	return (
		<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >
			<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
				<Wheel
					mustStartSpinning={mustSpin}
					prizeNumber={prizeNumber}
					data={data.length === 0 ? [{option: 'sin jugador'}, {option: 'sin jugador'}] : data}
					backgroundColors={['#3e3e3e', '#df3428']}
					onStopSpinning={(a) => functionFinish(a)}
					textColors={['#ffffff']}
				/>
			</div>
			<div style={{ margin: '20px'}}>
				<div style={{ display: 'flex', justifyContent: 'center'}}>
					<ButtonStyledSpin onClick={() => handleSpinClick()} loading={BotonOpt} disabled={data.length >= 2 ? false : true} >
						Girar
					</ButtonStyledSpin>
				</div>
				<div>
					<Form 
						id='create-course-form'
						name="addNotas"
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<div className=''>
							<div className=''>
								<label className=''>
									Editar opciones:
								</label>
								<Form.Item
									name="name"
									rules={[
										{
											required: true,
											message: 'Porfabor ingrese un jugador!',
										},
									]}
									hasFeedback
								>
									<Input />
								</Form.Item>
							</div>
						</div>
						<div style={{ marginTop: 30 }}>
							<Form.Item>
								<ButtonStyledForm  htmlType="submit" block loading={BotonOpt} >
									Agregar
								</ButtonStyledForm>
							</Form.Item>
						</div>
					</Form>
				</div>
				<div>
					{
						data.length >=1 && data.map((dt,i) => (
							<ButtonStyledOption BackgroundColor={dt.style.backgroundColor} TextColor={dt.style.textColor} onClick={() => EliminarJugador(dt)} key={i}>
								{dt.option}
							</ButtonStyledOption>
						))
					}
				</div>
			</div>
			{/* /assets/audio/ruleta.mp3 */}


			
		</div>
	)
};

const ButtonStyledSpin = styled(Button)`
    text-decoration: none;
    padding: 10px 25px 10px 25px;
    border: 1px solid #FFF;
    border-radius: 10px;
    background: #259118;
    color: #FFF;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    transition: 0.6s;
    height: auto !important;
	text-align: center;
	width: 80%;
`;

const ButtonStyledForm = styled(Button)`
    text-decoration: none;
    padding: 10px 25px 10px 25px;
    border: 1px solid #FFF;
    border-radius: 10px;
    background: #000;
    color: #FFF;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    transition: 0.6s;
    height: auto !important;

        &:hover{
            border: 1px solid #000;
            background: #FFF;
            color: #000;
        }
        &:focus{
            border: 1px solid #000;
            background: #FFF;
            color: #000;
        }
`;

const ButtonStyledOption = styled.div`
    text-decoration: none;
    padding: 10px 25px 10px 25px;
    border: 1px solid #FFF;
    border-radius: 10px;
	background: ${({ BackgroundColor }) => BackgroundColor};
    color: ${({ TextColor }) => TextColor};
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    transition: 0.6s;
    height: auto !important;
`;

export default Index;