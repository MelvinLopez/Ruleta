// fill = El color de relleno
// stroke = El color del borde

export const Icon = (typeIcon, color) => {

    switch (typeIcon) {
        case 'optionsMessage': return(
            <svg 
                version="1.1"  xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="0 0 512 512" 
            >
                <g>
                    <g xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <circle cx="192" cy="42.667" r="42.667"  fill={color ? color : '#000000'} data-original="#000000" />
                        </g>
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <circle cx="192" cy="192" r="42.667"  fill={color ? color : '#000000'} data-original="#000000" />
                        </g>
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <circle cx="192" cy="341.333" r="42.667"  fill={color ? color : '#000000'} data-original="#000000" />
                        </g>
                    </g>
                </g>
            </svg>
        );
        case 'eliminar': return(
            <svg 
                version="1.1"  xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="0 0 512 512" 
            >
                <g>
                    <path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" fill={color ? color : '#000000'} data-original="#000000" />
                    <path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" fill={color ? color : '#000000'} data-original="#000000" />
                    <path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0" fill={color ? color : '#000000'} data-original="#000000" />
                    <path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" fill={color ? color : '#000000'} data-original="#000000" />
                </g>
            </svg>
        );
        case 'compartir': return(
            <svg 
                version="1.1"  xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="0 0 512 512" 
            >
                <path d="m389.332031 160c-44.09375 0-80-35.882812-80-80s35.90625-80 80-80c44.097657 0 80 35.882812 80 80s-35.902343 80-80 80zm0-128c-26.453125 0-48 21.523438-48 48s21.546875 48 48 48 48-21.523438 48-48-21.546875-48-48-48zm0 0" fill={color ? color : '#000000'}/>
                <path d="m389.332031 512c-44.09375 0-80-35.882812-80-80s35.90625-80 80-80c44.097657 0 80 35.882812 80 80s-35.902343 80-80 80zm0-128c-26.453125 0-48 21.523438-48 48s21.546875 48 48 48 48-21.523438 48-48-21.546875-48-48-48zm0 0" fill={color ? color : '#000000'}/>
                <path d="m80 336c-44.097656 0-80-35.882812-80-80s35.902344-80 80-80 80 35.882812 80 80-35.902344 80-80 80zm0-128c-26.453125 0-48 21.523438-48 48s21.546875 48 48 48 48-21.523438 48-48-21.546875-48-48-48zm0 0" fill={color ? color : '#000000'}/>
                <path d="m135.703125 240.425781c-5.570313 0-10.988281-2.902343-13.910156-8.0625-4.375-7.679687-1.707031-17.453125 5.972656-21.824219l197.953125-112.855468c7.65625-4.414063 17.449219-1.726563 21.800781 5.976562 4.375 7.679688 1.707031 17.449219-5.972656 21.824219l-197.953125 112.851563c-2.496094 1.40625-5.203125 2.089843-7.890625 2.089843zm0 0" fill={color ? color : '#000000'} />
                <path d="m333.632812 416.425781c-2.6875 0-5.398437-.683593-7.894531-2.109375l-197.953125-112.855468c-7.679687-4.371094-10.34375-14.144532-5.972656-21.824219 4.351562-7.699219 14.125-10.367188 21.804688-5.972657l197.949218 112.851563c7.679688 4.375 10.347656 14.144531 5.976563 21.824219-2.945313 5.183594-8.363281 8.085937-13.910157 8.085937zm0 0" fill={color ? color : '#000000'} />
            </svg>
        );
        case 'editar': return(
            <svg 
                version="1.1"  xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="0 0 512 512" 
            >
                <g>
                <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M392.533,238.937c-9.426,0-17.067,7.641-17.067,17.067V426.67c0,9.426-7.641,17.067-17.067,17.067H51.2    c-9.426,0-17.067-7.641-17.067-17.067V85.337c0-9.426,7.641-17.067,17.067-17.067H256c9.426,0,17.067-7.641,17.067-17.067    S265.426,34.137,256,34.137H51.2C22.923,34.137,0,57.06,0,85.337V426.67c0,28.277,22.923,51.2,51.2,51.2h307.2    c28.277,0,51.2-22.923,51.2-51.2V256.003C409.6,246.578,401.959,238.937,392.533,238.937z" fill={color ? color : '#000000'} data-original="#000000" />
                    </g>
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M458.742,19.142c-12.254-12.256-28.875-19.14-46.206-19.138c-17.341-0.05-33.979,6.846-46.199,19.149L141.534,243.937    c-1.865,1.879-3.272,4.163-4.113,6.673l-34.133,102.4c-2.979,8.943,1.856,18.607,10.799,21.585    c1.735,0.578,3.552,0.873,5.38,0.875c1.832-0.003,3.653-0.297,5.393-0.87l102.4-34.133c2.515-0.84,4.8-2.254,6.673-4.13    l224.802-224.802C484.25,86.023,484.253,44.657,458.742,19.142z M434.603,87.419L212.736,309.286l-66.287,22.135l22.067-66.202    L390.468,43.353c12.202-12.178,31.967-12.158,44.145,0.044c5.817,5.829,9.095,13.72,9.12,21.955    C443.754,73.631,440.467,81.575,434.603,87.419z" fill={color ? color : '#000000'} data-original="#000000" />
                    </g>
                </g>
                </g>
            </svg>
        );
        case 'cerrar': return(
            <svg 
                version="1.1"  xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="0 0 512 512" 
            >
                <g>
                <g>
                    <g>
                        <g>
                            <path d="M415.338,196.662c-7.535-7.535-19.737-7.535-27.253,0l-82.181,82.18l-81.033-81.032c-7.478-7.478-19.584-7.478-27.042,0
                                c-7.478,7.478-7.478,19.584,0,27.042l81.033,81.033l-81.587,81.587c-7.535,7.535-7.535,19.736,0,27.253s19.737,7.517,27.253,0
                                l81.588-81.587l81.032,81.032c7.478,7.478,19.584,7.478,27.043,0c7.478-7.478,7.478-19.584,0-27.043l-81.033-81.032l82.181-82.18
                                C422.873,216.399,422.873,204.179,415.338,196.662z M306,0C136.992,0,0,136.992,0,306s136.992,306,306,306
                                c168.988,0,306-137.012,306-306S475.008,0,306,0z M306,573.75C158.125,573.75,38.25,453.875,38.25,306
                                C38.25,158.125,158.125,38.25,306,38.25c147.875,0,267.75,119.875,267.75,267.75C573.75,453.875,453.875,573.75,306,573.75z"
                                fill={color ? color : '#000000'}
                            />
                        </g>
                    </g>
                </g>
                </g>
            </svg>
        );
        case 'theme': return(
            <svg 
                version="1.1"  xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="0 0 512 512" 
            >
               <g>
                   <path d="m216.037 211.106c-27.084 0-42.369 24.265-45.109 46.81-1.902 15.651-6.964 31.185-11.76 43.19h56.869c24.813 0 45-20.187 45-45s-20.187-45-45-45z" fill={color ? color : '#000000'}/>
                   <path d="m497 20.894h-482c-8.284 0-15 6.716-15 15v265.213h126.473c4.758-10.164 12.486-28.817 14.674-46.811 2.39-19.655 10.592-37.72 23.096-50.863 13.696-14.397 32.091-22.326 51.795-22.326 3.598 0 7.135.271 10.6.763l87.794-87.795c8.498-8.5 19.799-13.181 31.819-13.181s23.321 4.681 31.82 13.182c8.498 8.498 13.181 19.799 13.181 31.818 0 12.02-4.683 23.32-13.183 31.82l-87.794 87.795c.491 3.464.763 6.999.763 10.598 0 16.871-5.604 32.456-15.041 45h236.003v-265.213c0-8.285-6.717-15-15-15z" fill={color ? color : '#000000'}/>
                   <path d="m278.58 214.777 78.276-78.277c2.834-2.834 4.395-6.601 4.395-10.606 0-4.006-1.561-7.772-4.395-10.605-2.834-2.835-6.6-4.395-10.606-4.395s-7.772 1.56-10.605 4.393l-78.277 78.278c8.411 5.577 15.635 12.8 21.212 21.212z" fill={color ? color : '#000000'}/>
                   <path d="m0 386.106c0 8.284 6.716 15 15 15h482c8.283 0 15-6.716 15-15v-55h-512z" fill={color ? color : '#000000'}/>
                   <path d="m331 461.106h-15v-30h-120v30h-15c-8.284 0-15 6.716-15 15s6.716 15 15 15h150c8.283 0 15-6.716 15-15s-6.717-15-15-15z" fill={color ? color : '#000000'}/>
                </g>
            </svg>
        );
        case 'cerrarSesion': return(
            <svg 
                version="1.1"  xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="0 0 512 512" 
            >
               <g>
                    <g>
                        <g>
                            <path d="M510.371,226.513c-1.088-2.603-2.645-4.971-4.629-6.955l-63.979-63.979c-8.341-8.32-21.824-8.32-30.165,0
                                c-8.341,8.341-8.341,21.845,0,30.165l27.584,27.584H320.013c-11.797,0-21.333,9.557-21.333,21.333s9.536,21.333,21.333,21.333
                                h119.168l-27.584,27.584c-8.341,8.341-8.341,21.845,0,30.165c4.16,4.181,9.621,6.251,15.083,6.251s10.923-2.069,15.083-6.251
                                l63.979-63.979c1.984-1.963,3.541-4.331,4.629-6.955C512.525,237.606,512.525,231.718,510.371,226.513z"
                                fill={color ? color : '#000000'}
                            />
                            <path d="M362.68,298.667c-11.797,0-21.333,9.557-21.333,21.333v106.667h-85.333V85.333c0-9.408-6.187-17.728-15.211-20.437
                                l-74.091-22.229h174.635v106.667c0,11.776,9.536,21.333,21.333,21.333s21.333-9.557,21.333-21.333v-128
                                C384.013,9.557,374.477,0,362.68,0H21.347c-0.768,0-1.451,0.32-2.197,0.405c-1.003,0.107-1.92,0.277-2.88,0.512
                                c-2.24,0.576-4.267,1.451-6.165,2.645c-0.469,0.299-1.045,0.32-1.493,0.661C8.44,4.352,8.376,4.587,8.205,4.715
                                C5.88,6.549,3.939,8.789,2.531,11.456c-0.299,0.576-0.363,1.195-0.597,1.792c-0.683,1.621-1.429,3.2-1.685,4.992
                                c-0.107,0.64,0.085,1.237,0.064,1.856c-0.021,0.427-0.299,0.811-0.299,1.237V448c0,10.176,7.189,18.923,17.152,20.907
                                l213.333,42.667c1.387,0.299,2.795,0.427,4.181,0.427c4.885,0,9.685-1.685,13.525-4.843c4.928-4.053,7.808-10.091,7.808-16.491
                                v-21.333H362.68c11.797,0,21.333-9.557,21.333-21.333V320C384.013,308.224,374.477,298.667,362.68,298.667z"
                                fill={color ? color : '#000000'}
                            />
                        </g>
                    </g>
                </g>
            </svg>
        );
        default:
            break;
    }
}