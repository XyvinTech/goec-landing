
import ComboBox from '@/ui/admin/ComboBox';
import { Input } from '@/ui/admin/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/admin/Select';

const vehicle_types = [
    "2 Wheelers",
    "3 Wheelers",
    "4 Wheelers",
    "Heavy Vehicles",
];

const socket_types = [
    "CCS",
    "CHAdeMO",
    "GB/T GUN",
    "Type 2",
    "16 Amp Socket",
    "AC Type 1",
];

const ChargerForm = ({ chargers, addCharger, onChargerChange }) => {
    const socketOptions = socket_types.map((socket) => ({
        value: socket,
        label: socket,
    }));

    return (
        <div>
            {chargers.map((charger, index) => (
                <div
                    key={index}
                    className="bg-white px-7 py-5 rounded-md shadow-sm mt-5"
                >
                    <p className="font-semibold text-base text-[#202223] mb-5">
                        Charger Info
                    </p>
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-between gap-5">
                            <div className="flex-1 flex flex-col gap-1">
                                <label className="text-sm text-[#202223]">Vehicle Type</label>
                                <Select
                                    value={charger.vehicleType}
                                    onValueChange={(value) =>
                                        onChargerChange(index, 'vehicleType', value)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose Vehicle" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {vehicle_types.map((type, typeIndex) => (
                                            <SelectItem key={typeIndex} value={type}>
                                                {type}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex-1 flex flex-col gap-1">
                                <label className="text-sm text-[#202223]">Socket Type</label>
                                <ComboBox
                                    items={socketOptions}
                                    onChange={(val) => onChargerChange(index, 'socketType', val)}
                                    value={charger.socketType}
                                    placeholder="Choose socket type"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="text-sm text-[#202223]">Output Power</label>
                                <Input
                                    value={charger.outputPower}
                                    onChange={(e) =>
                                        onChargerChange(index, 'outputPower', e.target.value)
                                    }
                                    type="text"
                                    placeholder="Enter output power"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="text-sm text-[#202223]">Rs/unit</label>
                                <Input
                                    value={charger.rateUnit}
                                    onChange={(e) =>
                                        onChargerChange(index, 'rateUnit', e.target.value)
                                    }
                                    type="text"
                                    placeholder="Enter Rs/unit"
                                />
                            </div>
                        </div>

                        <button
                            className="flex items-center px-2.5 py-1.5 text-blue-800 font-semibold text-base leading-10 whitespace-nowrap focus:outline-none"
                            type="button"
                            onClick={addCharger}
                        >
                            <span className="text-2xl mr-2">+</span>
                            <span>Add new charger</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChargerForm;
