import { Button } from "@/ui/admin/Button";
import { Checkbox } from "@/ui/admin/Checkbox";
import ComboBox from "@/ui/admin/ComboBox";
import ImageDropzone from "@/ui/admin/ImageDropZone";
import { Input } from "@/ui/admin/Input";
import RatingComponent from "@/ui/admin/RatingComponent";
import { Switch } from "@/ui/admin/Switch";
import { Textarea } from "@/ui/admin/TextArea";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ChargerForm from "./ChargerForm";
import MultiSelectComponent from "./MultiselectComponent";

const AddStationForm = () => {
  const { handleSubmit, control } = useForm();

  const items = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ];

  const [chargers, setChargers] = useState([
    { id: 1, vehicleType: "", socketType: "", outputPower: "", rateUnit: "" },
  ]);

  // Handler for form submission
  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    console.log("Chargers Data: ", chargers);
  };

  // Handler for adding a new charger
  const addCharger = () => {
    setChargers((prevChargers) => [
      ...prevChargers,
      {
        id: prevChargers.length + 1,
        vehicleType: "",
        socketType: "",
        outputPower: "",
        rateUnit: "",
      },
    ]);
  };

  // Handler for charger data change
  const onChargerChange = (index, field, value) => {
    setChargers((prevChargers) =>
      prevChargers.map((charger, i) =>
        i === index ? { ...charger, [field]: value } : charger
      )
    );
  };

  return (
    <div className="relative w-full overflow-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white px-7 py-5 rounded-md shadow-sm">
          <p className="font-semibold text-base text-[#202223] mb-5">Media</p>
          <Controller
            name="media"
            control={control}
            render={({ field }) => <ImageDropzone {...field} />}
          />
        </div>
        <div className="bg-white px-7 py-5 rounded-md shadow-sm">
          <p className="font-semibold text-base text-[#202223] mb-5">
            Cover Image
          </p>
          <Controller
            name="coverImage"
            control={control}
            render={({ field }) => <ImageDropzone {...field} />}
          />
        </div>
        <div className="bg-white px-7 py-5 rounded-md shadow-sm mt-5">
          <p className="font-semibold text-base text-[#202223] mb-5">General</p>
          <div className="flex flex-col gap-5">
            <div>
              <label className="text-sm text-[#202223]">Station name</label>
              <Controller
                name="stationName"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Enter station name" />
                )}
              />
            </div>
            <div>
              <label className="text-sm text-[#202223]">Location</label>
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    className="resize-none"
                    placeholder="Enter description"
                  />
                )}
              />
            </div>

            <div className="flex justify-between gap-5">
              <div className="flex-1">
                <label className="text-sm text-[#202223]">Country</label>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter country" />
                  )}
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-sm text-[#202223]">State</label>
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <ComboBox
                      {...field}
                      placeholder="Choose State"
                      items={items}
                    />
                  )}
                />
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-sm text-[#202223]">City</label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <ComboBox
                      {...field}
                      placeholder="Choose City"
                      items={items}
                    />
                  )}
                />
              </div>
            </div>

            <div className="flex items-center gap-20">
              <div className="flex items-center gap-2">
                <label className="text-sm text-[#202223]">Goec only</label>
                <Controller
                  name="goecOnly"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                    />
                  )}
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-[#202223]">Rating</label>
                <Controller
                  name="rating"
                  control={control}
                  render={({ field }) => (
                    <RatingComponent
                      value={field.value}
                      onChange={(rating) => field.onChange(rating)}
                      maxRating={5}
                    />
                  )}
                />
              </div>
            </div>
            <div className=" flex justify-between gap-5">
              <div className="flex-1">
                <label className="text-sm text-[#202223]">Longitude</label>
                <Controller
                  name="longitude"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter longitude" />
                  )}
                />
              </div>
              <div className="flex-1">
                <label className="text-sm text-[#202223]">Latitude</label>
                <Controller
                  name="latitude"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter latitude" />
                  )}
                />
              </div>

              <div className="flex-1">
                <label className="text-sm text-[#202223]">Map url</label>
                <Controller
                  name="mapUrl"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter map url" />
                  )}
                />
              </div>
            </div>

            <div className=" h-fit flex items-center gap-8">
              <div className=" h-fit flex items-center gap-1">
                <Controller
                  name="restRoom"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                      className="border-[#C9CCCF]"
                    />
                  )}
                />
                <label className="text-sm text-[#202223]" htmlFor="restRoom">
                  Rest room
                </label>
              </div>
              <div className=" h-fit flex items-center gap-1">
                <Checkbox className="border-[#C9CCCF]" />
                <label
                  id="restaurant"
                  className="text-sm text-[#202223]"
                  htmlFor="restaurant"
                >
                  Restaurant
                </label>
              </div>
              <div className=" h-fit flex items-center gap-1">
                <Checkbox id="hotel" className="border-[#C9CCCF]" />
                <label className="text-sm text-[#202223]" htmlFor="hotel">
                  Hotel
                </label>
              </div>
              <div className=" h-fit flex items-center gap-1">
                <Checkbox id="cafe" className="border-[#C9CCCF]" />
                <label className="text-sm text-[#202223]" htmlFor="cafe">
                  Cafe
                </label>
              </div>
              <div className=" h-fit flex items-center gap-1">
                <Checkbox id="mall" className="border-[#C9CCCF]" />
                <label className="text-sm text-[#202223]" htmlFor="mall">
                  Mall
                </label>
              </div>
            </div>
          </div>
        </div>

        <ChargerForm
          chargers={chargers}
          addCharger={addCharger}
          onChargerChange={onChargerChange}
        />

        <div className="bg-white w-fit px-7 py-5 rounded-md shadow-sm mt-5">
          <p className="font-semibold text-base text-[#202223] mb-5">
            Select Stations
          </p>
          <Controller
            name="nearbyStations"
            control={control}
            render={({ field }) => (
              <MultiSelectComponent {...field} placeholder="Nearby stations" />
            )}
          />
        </div>

        <div className="flex justify-between my-8">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-red-500 text-red-500"
            type="button"
            // onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default AddStationForm;
